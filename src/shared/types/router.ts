import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line @sashar/fsd-paths/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}
