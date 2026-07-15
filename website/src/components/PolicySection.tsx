import { NavLink, useParams } from "react-router";
import { NotFoundPage } from "./404";
import { Button } from "./ui/button";

import { SidebarWrapper } from "./PolicyWrapper";

const Holds = () => (
    <SidebarWrapper>
        <h1>Holds</h1>
        <h2>Why can’t I place holds from the patron dashboard?</h2>
        <p>Due to the fact we use professional library software, holds can only be placed from the Libib website:</p>
        <Button asChild className="m-auto "><a href="https://www.libib.com/u/plumfieldlibrary" target="_blank" className="">Online Catalog</a></Button>
        <h2 className="pt-6">How much notice do I need for holds?</h2>
        <p>Please place holds at least <span className="underline">48 hours</span> before you plan to pick up, so we have time to pull them at a gentle, sustainable pace.</p>
        <h2>Where do I pickup my holds?</h2>
        <p>Please refer to the <a><NavLink to="/library-policies/interlibrary-loan" className="a">Interlibrary Loan section</NavLink></a></p>
    </SidebarWrapper>
)
const ILL = () => (
    <SidebarWrapper>
        <h1>Interlibrary loan</h1>
        <p>This is a brand new endeavor for us. While large public libraries have professional systems in place, we are creating our own from scratch. We kindly ask for your patience as we work out the details and improve the process.</p>
        <p className="text-lg">Here is how it works:</p>
        <ol className="pb-6">
            <li>Place your books on hold the normal way in Libib.</li>
            <li>Log in to your <a href="https://dashboard.plumfieldlibrary.com" target="_blank">patron dashboard.</a></li>
            <li>Click the Interlibrary Loan button.</li>
            <li>Fill out one form for each book you wish to borrow from the Main Library.</li>
            <li>We will be notified and will do our best to pull the book for you. If it is checked out, you will be first in line when it returns.</li>
        </ol>
        <p className="text-lg">When your book ships:</p>
        <ul className="pb-6">
            <li>It will be checked out to you on the day it leaves the Main Library.</li>
            <li>When it arrives at the Shire Branch, Morgan will notify you for pickup.</li>
            <li>ILL checkouts are 60 days (instead of 45) to allow for travel and processing.</li>
            <li>You may return your book to either location.</li>
        </ul>
        <p className="text-lg">Please note:</p>
        <ul>
            <li>If you request a book but do not pick it up within the 60-day checkout period, your ILL privileges may be paused.</li>
            <li>No renewals are available for ILL books at this time.</li>
            <li>It may take up to 2 weeks for your book to ship.</li>
        </ul>
    </SidebarWrapper>
)
const ParentPresent = () => (
    <SidebarWrapper>
        <h1>Parent-Present Policy</h1>
        <p>Plumfield Living Library is a family-centered, parent-present community library. Our classes, clubs, gatherings, and library visits are designed to support families in a warm and shared learning environment, not to function as a school, daycare, camp, or drop-off program.</p>

        <p>For that reason, a parent, guardian, or responsible adult must remain on site and available for the full duration of any Plumfield class, club, gathering, or library visit unless Plumfield has clearly stated otherwise in writing. Plumfield teachers and leaders are responsible for guiding the activity or instruction, but parents remain responsible for the supervision, safety, behavior, and needs of their own children while participating in Plumfield activities.</p>

        <p>This expectation applies at all Plumfield locations, including the main library, branch libraries, outdoor areas, and any off-site gathering place used for a Plumfield activity. It also applies to siblings or other children who may be present but are not formally participating in a class or activity.</p>

        <p>Children should remain with or near their parent/responsible adult unless the structure of the class clearly allows otherwise. Parents are expected to remain attentive and available to assist their children as needed, especially during activities involving outdoor time, stairs, crowded rooms, shelves, handwork, art materials, sewing tools, scissors, needles, glue guns, or other ordinary classroom and craft materials.</p>

        <p>Children age 5 and under need close support from a parent, guardian, or responsible helper for the full duration of any Plumfield class or activity. This helps us preserve a peaceful, safe, and welcoming environment for all families and allows our teachers to focus on instruction rather than general childcare.</p>

        <p>If a child’s needs, behavior, or level of supervision becomes unsafe, disruptive, or beyond what Plumfield can reasonably accommodate, Plumfield may ask the parent or responsible adult to assist, step out with the child, or withdraw from the activity for the day. This is not punitive; it is simply part of caring well for the whole group and maintaining the kind of environment Plumfield is meant to be.</p>

        <p>By participating in Plumfield Living Library activities, families acknowledge that Plumfield is a parent-present environment and agree that parents or responsible adults remain responsible for their own children at all times.</p>
    </SidebarWrapper>
)

const PatronDashboard = () => (
    <SidebarWrapper>
        <h1>Patron Dashboard</h1>
        <h2>What is my Patron Dashboard?</h2>
        <p>The Patron Dashboard is a hub where you can:</p>
        <ul>
            <li>View upcoming invoices</li>
            <li>View upcoming classes you have signed up for</li>
            <li>View class times and locations</li>
            <li>Sign up for classes</li>
            <li>Schedule and appointment at one of our branches</li>
            <li>Find the addresses and contact information for our branches</li>
            <li>Order doTerra oils at a wholesale discount</li>
            <li>Request <a><NavLink to="/library-policies/interlibrary-loan">Interlibrary Loan</NavLink></a></li>
        </ul>
        <h2 className="pt-6">Where is my Patron Dashoard?</h2>
        <Button asChild ><a href="https://dashboard.plumfieldlibrary.com" target="_blank">Log In</a></Button>
        <h2 className="pt-6">How do I log in?</h2>
        <ol>
            <li>Click the login button above.</li>
            <li>Enter your email into the Email field and hit submit</li>
            <li>Check your inbox for the one-time sign-in link that you will be sent!</li>
        </ol>
    </SidebarWrapper>
)

const Classes = () => (
    <SidebarWrapper>
        <h1>Library Classes</h1>
        <h2>How do I sign up for classes?</h2>
        <p>If you have a Full Membership, just visit your <a href="https://dashboard.plumfieldlibrary.com" target="_blank">Patron Dashboard!</a></p>
        <h2>How do I pay?</h2>
        <p>You should have received an invoice for your classes. You can view your invoices on your <a href="https://dashboard.plumfieldlibrary.com/my-invoices">Patron Dashboard</a></p>
        <h2>How can I see which classes I am signed up for?</h2>
        <p>Visit your <a href="https://dashboard.plumfieldlibrary.com/my-classes" target="_blank">Patron Dashboard!</a></p>
        <h2>Cancellation policy</h2>
        <p>All classes are non-refundable. If you need to make changes to your classes due to schedule conflicts or illness, you may keep your materials to do on your own, or you may donate them back to the library for future projects.</p>
        <p>If the class is cancelled by the teacher, we will do our best to come with a fair solution to enrollment fees and possible reschedule dates.</p>
    </SidebarWrapper>
)

const Renewals = () => (
    <SidebarWrapper>
        <h1>Renewals</h1>
        <p>What a gift it is to be part of a library that has grown to more than 100 families sharing one collection! With so many readers enjoying our books, keeping them circulating is one of the most important ways we steward what we have. For that reason, we don't offer renewals at this time. The 45-day loan period gives each family a generous window with their books, and returning them on time means the next family gets their turn — that's the heart of how a shared library works.</p>
        <p>That said, if you're not quite finished with a book, you're always welcome to bring it back to the library to be checked in and then checked out anew, as long as no one else is waiting for it.</p>
        <p>There are practical reasons behind our renewal policy as well: our software can't easily manage renewals, and tracking them by hand across multiple locations would add more than our small team can sustain.</p>
        <p><span className="underline">Special note for new mothers:</span> During maternity leave, you're welcome to keep your books for up to three months instead of the standard 45 days. Just let us know when that season arrives, and we'll gladly set it up for you.</p>
    </SidebarWrapper>
)

const Volunteers = () => (
    <SidebarWrapper>
        <h1>
            Volunteers
        </h1>
        <p>We're so grateful for the many hearts eager to give their time to Plumfield — it's one of the surest signs of a community that loves what we're building together.</p>
        <p>At the moment, we're in the middle of a season of significant growth, creating and launching new kinds of classes and book clubs, and bringing more than 30 books back into print. Because so much of our energy is going into getting to know our new families while managing our many projects, we've temporarily paused taking on new interns and volunteers. We simply want to be able to train and welcome people well, rather than in the midst of transition.</p>
        <p>In the meantime, we're prayerfully discerning the best ways to train and support volunteers in the seasons ahead, and we'll discern when to relaunch our internship program in the future. We don't yet know exactly how or when this will take shape, but we look forward to sharing more once it does.</p>
    </SidebarWrapper>
)

const MainRules = () => (
    <SidebarWrapper>
        <h1 className="pb-0">Main Library Rules</h1>
        <h2>Indoors</h2>
        <ul>
            <li>Have fun with the trains and toys in the children's room — but no shouting, rough-housing, wrestling, throwing, or hide-and-seek anywhere inside the house.</li>
            <li>Enjoy hunting for books, but please no playing on the stairs or railings; it isn't safe.</li>
            <li>Join us in the living room and dining room only on club days when an adult is present. No children should be upstairs without a library volunteer/teacher. The bedrooms are always, 100% of the time, off limits. The other rooms in the basement are always, 100% of the time, off limits.</li>
            <li>Knit, crochet, read, or visit on the couches to your heart's content during a class or club — but no romping or pillow fights.</li>
        </ul>
        <h2>Outdoors</h2>
        <ul>
            <li>The front yard is yours to enjoy. The side yard, back yard, camper area, and garage are not part of the library.</li>
            <li>Park anywhere in the cul-de-sac, but please not in the driveway — small children and dogs are often about.</li>
        </ul>
        <h2>Our Animals</h2>
        <ul>
            <li>The dogs are delighted you're here! Our cat would rather nap — please let him be and leave his door alone.</li>
            <li>The dogs think everything is a toy, even your lovie or lunch bag. Please don't offer the dogs toys, balls, or food — nothing near their mouths, for their sake and yours.</li>
            <li>They love a gentle pet, but please don't wrestle, throw things for them, or try to teach them tricks.</li>
        </ul>
    </SidebarWrapper>
)

const ShireRules = () => (
    <SidebarWrapper>
        <h1 className="pb-0">Shire Branch Rules</h1>
        <h2>Indoors</h2>
        <ul>
            <li>Have fun playing with trains and toys in the children’s area in the basement, but please no shouting, rough-housing, wrestling, throwing or playing hide-and-seek anywhere in the house.</li>
            <li>The basement bathroom and basement living room are open for use but the basement kitchen, root cellar, back furnace room and office in the basement are not part of the library.</li>
            <li>Have fun finding books in the library! But no playing on the stairs and railings is allowed because it is dangerous.</li>
            <li>Join us in the living room and dining room on club days when an adult is present, but the bedrooms, all closets and the entire second floor are not part of the library.</li>
            <li>Please feel free to handicraft, read or talk on the couches, but no romping and pillow-fighting at any time.</li>
        </ul>
        <h2>Outdoors</h2>
        <ul>
            <li>Please feel free to park anywhere in the grass along the driveway or by the shop garage. Please leave the space in front of the main garage open for the safety of those coming in and out through the garage.</li>
            <li>Please do not enter any outbuilding including the shop, shop garage and tractor shed because there are dangerous tools and farm equipment within.</li>
            <li>Feel free to play outside but stay within the mowed grass areas.</li>
            <li>Please feel free to enjoy the beauty of the gardens but please take care not to damage plants and vegetables by remaining on pathways. Please do not pick produce without permission.</li>
            <li>Please enjoy the trampoline, swing set and designated outdoor playthings under parental supervision. Limit of 6 children on the trampoline at a time.</li>
        </ul>
        <h2>Our Animals</h2>
        <ul>
            <li>Our cat, Hunter, loves to be pet by you! But he may nip at you if you tease him or try to play with him. Please just pet him nicely.</li>
            <li>Please enjoy watching the chickens, but do not enter their coop or fenced-in area. Chickens can carry salmonella and other diseases, so please do not pick up any eggs you may find laying in the yard.</li>
        </ul>
    </SidebarWrapper>
)

const POLICY_SECTIONS: Record<string, React.ComponentType> = {
    "holds": Holds,
    "interlibrary-loan": ILL,
    "dashboard": PatronDashboard,
    "classes": Classes,
    "volunteers": Volunteers,
    "renewals": Renewals,
    "parent-present": ParentPresent,
    "main-rules": MainRules,
    "shire-rules": ShireRules,
};

export function PolicySection() {
    const { section } = useParams();
    const Component = section ? POLICY_SECTIONS[section] : undefined;

    return Component ? <Component /> : <NotFoundPage />;
}