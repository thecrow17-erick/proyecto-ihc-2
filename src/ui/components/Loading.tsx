import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export const Loading = () => {
  return (
    <ActivityIndicator animating={true} color={MD2Colors.grey500} />
  )
}

