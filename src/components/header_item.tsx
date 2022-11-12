interface IHeaderItemProps {
    label : string;
    url? : string;
}
export function HeaderItem({label, url} : IHeaderItemProps) {
    return (
        <p className="text-md text-white hover:text-brand-500 cursor-pointer mx-8">
            {label}
        </p>
    );
}