// import { Skeleton } from '@/components/ui/skeleton';
import { currentUser } from "@/lib/auth";
// import { getUserSubscriptionPlan } from '@/lib/subscription';
import PricingCards from '@/components/pricing/index';
import PricingFaq from "@/components/pricing/pricing-faq";

export const metadata = {
    title: "Pricing",
}

export default async function PricingPage() {
    const user = await currentUser()
    let subscriptionPlan;

    if (user) {
        // subscriptionPlan = await getUserSubscriptionPlan(user.id)
    }

    return (
        <div className="flex w-full flex-col gap-16 py-8 md:py-8">
            <PricingCards />
            <hr className='container' />
            <PricingFaq />
        </div>
    )
}