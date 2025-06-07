import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    selector?: string;
}

export const Portal = ({ children, selector = '.app' }: PortalProps) => {
    const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el = document.querySelector<HTMLElement>(selector);
        if (el) {
            setMountNode(el);
        }
    }, [selector]);

    if (!mountNode) {
        return null;
    }

    return createPortal(children, mountNode);
};
