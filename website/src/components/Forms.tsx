import { FilloutSliderEmbed } from "@fillout/react";
import { useState } from "react";
import { Button } from "./ui/button";

export function NewPatron({ className }: { className?: string }) {
    const formID = "fE4qATZfL8us"
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <Button onClick={() => setIsOpen(true)} className={className ?? ""}>Membership Intrest Form</Button>

        <FilloutSliderEmbed
            filloutId={formID}
            inheritParameters
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            sliderDirection="right"

        />
    </>)
}