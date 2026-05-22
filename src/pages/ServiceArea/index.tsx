import { useIsMobile } from '../../hooks/useIsMobile';
import Desktop from './Desktop';
import Mobile from './Mobile';

export default function ServiceArea() {
  const isMobile = useIsMobile();
  return isMobile ? <Mobile /> : <Desktop />;
}
