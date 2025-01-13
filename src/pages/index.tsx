import { CountryCard } from "@/components/CountryCard";
import { countries as countriesItems } from "@/utils/const/counties";
import { Geist } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function Home() {
    const [countries, setCountries] = useState(() =>
        countriesItems.map(({ iso_code2, iso_code3, ...other }) => ({
            ...other,
            id: iso_code2 + iso_code3,
        }))
    );

    const onDelete = (id: string) => () => {
        setCountries((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className={`${geistSans.variable}`}>
            <div className="max-w-screen-lg mx-auto">
                {countries.map((item) => (
                    <CountryCard
                        key={item.id}
                        src={item.flag_url && "https:" + item.flag_url}
                        name={item.name_ru}
                        onDelete={onDelete(item.id)}
                    />
                ))}
            </div>
        </div>
    );
}
