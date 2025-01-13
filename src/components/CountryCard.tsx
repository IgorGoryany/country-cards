import classNames from "classnames";
import Image from "next/image";
import { FC, useState } from "react";

interface CountryCardProps {
    src?: string;
    name: string;
    onDelete?: () => void;
}

export const CountryCard: FC<CountryCardProps> = (props) => {
    const { name, onDelete, src } = props;
    const [isDeleting, setIsDeleting] = useState(false);

    const onDeleteClick = () => {
        setIsDeleting(true);
        setTimeout(() => {
            onDelete?.();
        }, 500);
    };

    return (
        <div
            className={classNames(
                "p-2 flex items-start justify-between border border-black rounded-lg max-h-12 overflow-hidden mt-1 transition-all duration-200 delay-200",
                "",
                {
                    "animate-remove -mb-[52px]": isDeleting,
                }
            )}
        >
            <div className="flex items-baseline gap-3">
                {src ? (
                    <Image width={20} height={8} src={src} alt={name} />
                ) : (
                    <div className="w-5 h-2"></div>
                )}
                <span>{name}</span>
            </div>
            <button
                onClick={onDeleteClick}
                className="p-1 border border-black rounded-lg"
            >
                delete
            </button>
        </div>
    );
};
