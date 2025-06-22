import { ClipLoader } from 'react-spinners';


type Props = { loading: boolean };

export default function Loader({ loading }: Props) {
  return (
    <ClipLoader />
  );
}
