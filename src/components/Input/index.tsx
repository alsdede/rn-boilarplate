import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';

import { TextInputProps } from 'react-native';
import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}
const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const [defaultValue, setDefaultValue] = useState('');
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [error, setError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputValueRef.current.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {}, []);

  return (
    <S.Container isFocused={isFocused} hasError={!!error}>
      <S.TextInput
        ref={inputElementRef}
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </S.Container>
  );
};

export default forwardRef(Input);
