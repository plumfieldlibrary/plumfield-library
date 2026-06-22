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
                <img src={img} alt={alt} className="object-cover" />
            </div>
        </CardHeader>
        <CardFooter>
            <LinkButton src={href} title={title} />
        </CardFooter>
    </Card>
)
