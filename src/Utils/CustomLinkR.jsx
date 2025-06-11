import { Link as RouterLink } from 'react-router-dom';

const Link = ({ reloadDocument, replace, to, children, ...props }) => {
    if (reloadDocument) {
        const handleClick = (e) => {
            e.preventDefault();
            const newUrl = `${window.location.origin}${window.location.pathname}#${to}`;

            if (replace) {
                window.history.replaceState(null, null, newUrl);
                window.location.reload();
            } else {
                window.location.href = newUrl;
                window.location.reload();
            }
        };

        return (
            <a
                href={`#${to}`}
                onClick={handleClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <RouterLink to={to} replace={replace} {...props}>
            {children}
        </RouterLink>
    );
};

export default Link;