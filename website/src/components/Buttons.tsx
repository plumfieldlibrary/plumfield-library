import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader } from "./ui/card";
export const LinkButton = ({ src, title }: { src: string, title: string }) => (
    <Button asChild><a href={src} target="_blank">{title} <ArrowUpRightIcon /></a></Button>
)

export const ImageLink = ({ href, title, img, alt }: { href: string, title: string, img: string, alt: string }) => (
    <Card className="max-w-90 w-full md:max-w-full h-full m-auto">
        <CardHeader>
            <div className="w-full h-auto m-auto">
                <img src={img} alt={alt} className="object-cover" loading="eager" />
            </div>
        </CardHeader>
        <CardFooter>
            <LinkButton src={href} title={title} />
        </CardFooter>
    </Card>
)

export const DoTerraButton = () => {
    const date = new Date();
    const dayOfMonth = date.getDate();
    let year = date.getFullYear();
    let monthIndex = date.getMonth(); // 0 = Jan, 11 = Dec

    if (dayOfMonth >= 5) {
        monthIndex += 1; // move to next month
        if (monthIndex > 11) {
            monthIndex = 0; // rollover to Jan
            year += 1;
        }
    }

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const endString = `${months[monthIndex]} ${year}`;
    const modHref = "https://plumfieldlibrary.fillout.com/t/fcqHZEwrBqus?month=" + encodeURIComponent(endString);
    return <Button asChild><a href={modHref}>doTerra Order</a></Button>

}
