import { useIsMobile } from '../../hooks/useIsMobile';
import Desktop from './Desktop';
import Mobile from './Mobile';

export default function Reviews() {
  const isMobile = useIsMobile();
  return isMobile ? <Mobile /> : <Desktop />;
}
