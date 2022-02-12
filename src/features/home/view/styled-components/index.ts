import styled from 'styled-components/native';

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  ${({ theme }) => theme.typography.family.default.regular}
  font-size: ${({ theme }) => theme.typography.size.md}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.md}px;
  color: ${({ theme }) => theme.color.primary['gray-100']};
`;
