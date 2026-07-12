import { NavLink, useParams } from "react-router";
import { NotFoundPage } from "./404";
import { Button } from "./ui/button";

import { SidebarWrapper } from "./PolicyWrapper";

const Holds = () => (
    <SidebarWrapper>
        <h1>Holds</h1>
        <h2>Why can’t I place holds from the patron dashboard?</h2>
        <p>Due to limitations in our library software, holds can only be placed from the Libib website:</p>
        <Button asChild className="m-auto "><a href="https://www.libib.com/u/plumfieldlibrary" target="_blank" className="">Online Catalog</a></Button>
        <h2 className="pt-6">How much notice do I need for holds?</h2>
        <p>Please place holds at least <strong className="text-white">48 hours</strong> before you plan to pick up, so we have time to pull them at a gentle, sustainable pace.</p>
        <h2>What if I want to pick up holds from a different branch?</h2>
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
        <p>Our library does not offer renewals at this time. </p>
        <p>There are a few reasons for this:</p>
        <ul>
            <li>Our software cannot easily manage renewals.</li>
            <li>With over 100 families sharing a small collection, we need to keep books circulating.</li>
            <li>Tracking renewals manually adds extra administrative work for our small team, especially with having multiple locations to keep in sync</li>
        </ul>
        <p><strong>Special note for new mothers:</strong> During maternity leave, patrons are welcome to keep books for up to three months instead of the standard 45 days. When that time comes, just let us know, and we’ll gladly set that up for you.</p>
    </SidebarWrapper>
)

const Volunteers = () => (
    <SidebarWrapper>
        <h1>
            Volunteers
        </h1>
        <p>At the moment, we are in a period of significant transition as we expand into our new branches and launch programs like the Plumfield Explorers.</p>
        <p>Because of this, we have temporarily paused taking on new interns or volunteers. We hope to reopen the internship program next school year, once our schedule, commuting, and programming settle into their new rhythm.</p>
    </SidebarWrapper>
)

export function PolicySection() {
    const { section } = useParams();


    if (section) {
        switch (section) {
            case "holds":
                return <Holds />
            case "interlibrary-loan":
                return <ILL />
            case "dashboard":
                return <PatronDashboard />
            case "classes":
                return <Classes />
            case "volunteers":
                return <Volunteers />
            case "renewals":
                return <Renewals />
            case "parent-present":
                return <ParentPresent />
            default:
                break;
        }
    }
    return <NotFoundPage />
}