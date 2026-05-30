import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle
} from "@/components/ui/item";
import { CircleQuestionMarkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export const FAQ = () => (
    <Card>
        <CardHeader className="text-2xl">Frequently Asked Questions</CardHeader>
        <CardContent>
            <div className="flex flex-col gap-2">
                <Item variant="muted">
                    <ItemMedia variant="icon">
                        <CircleQuestionMarkIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Where are you located?</ItemTitle>
                        <ItemDescription>
                            <ul>
                                <li><strong>Main:</strong> New Denmark, WI</li>
                                <li><strong>Shire:</strong> Pulaski, WI</li>
                                <li><strong>Little Way:</strong> De Pere, WI</li>
                            </ul>
                        </ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="muted">
                    <ItemMedia variant="icon">
                        <CircleQuestionMarkIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>What are your hours?</ItemTitle>
                        <ItemDescription>
                            At main, by appointment on Thursday-Saturday from 12:00-3:30. Patrons can schedule an appointment from the Patron Dashboard. At Shire, by appointment.
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions >
                        <Button asChild variant="secondary"><a href="https://dashboard.plumfieldlibrary.com/branches" target="_blank">Login</a></Button>
                    </ItemActions>
                </Item>
                <Item variant="muted">
                    <ItemMedia variant="icon">
                        <CircleQuestionMarkIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>
                            How does this work?
                        </ItemTitle>
                        <ItemContent>
                            <ItemDescription>
                                This is a private lending library open to members. We offer two membership tiers:
                                <ul>
                                    <li><strong>Full Membership: </strong> Full access to the Library catalog with the ability to signup for classes and have in-library appointments</li>
                                    <li><strong>No Contact Membership: </strong>Full access to the Library catalog via porch pick-up and drop-off, but without the ability to signup for classes and have in-library appointments</li>
                                </ul>
                            </ItemDescription>
                        </ItemContent>
                    </ItemContent>
                </Item>
                <Item variant="muted">
                    <ItemMedia variant="icon">
                        <CircleQuestionMarkIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>
                            How much does it cost?
                        </ItemTitle>
                        <ItemDescription>
                            <ul>
                                <li><strong>Full Membership: </strong>$150 for new members, $120 for returning members, plus any class or material fees</li>
                                <li><strong>No Contact Membership: </strong>$75/year</li>
                            </ul>
                        </ItemDescription>
                    </ItemContent>
                </Item>
                <Item variant="muted">
                    <ItemMedia variant="icon">
                        <CircleQuestionMarkIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>
                            Can I request holds without coming into the library?
                        </ItemTitle>
                        <ItemDescription>
                            Absolutely! We have a Libib account and every patron is given their own holds login.
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button asChild variant="secondary"><a href="https://www.libib.com/u/plumfieldlibrary" target="blank">Our Catalog</a></Button>
                    </ItemActions>
                </Item>
            </div>
        </CardContent>
    </Card>
)