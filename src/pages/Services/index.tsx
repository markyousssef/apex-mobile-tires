import { useIsMobile } from '../../hooks/useIsMobile';
import Desktop from './Desktop';
import Mobile from './Mobile';

export default function Services() {
  const isMobile = useIsMobile();
  return isMobile ? <Mobile /> : <Desktop />;
}
