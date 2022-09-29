import { Text, TextProps } from "react-native";

export function SansLight({ children, className, ...props }: TextProps) {
  return (
    <Text className={`font-sulsans-light ${className}`} {...props}>
      {children}
    </Text>
  );
}

export function SansRegular({ children, className, ...props }: TextProps) {
  return (
    <Text className={`font-sulsans-regular ${className}`} {...props}>
      {children}
    </Text>
  );
}

export function SansMedium({ children, className, ...props }: TextProps) {
  return (
    <Text className={`font-sulsans-medium ${className}`} {...props}>
      {children}
    </Text>
  );
}

export function SansBold({ children, className, ...props }: TextProps) {
  return (
    <Text className={`font-sulsans-bold ${className}`} {...props}>
      {children}
    </Text>
  );
}
