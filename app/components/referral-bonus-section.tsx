'use client'

import { GiftIcon, UserPlusIcon, AcademicCapIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export function ReferralBonusSection() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Refer & Earn Rewards</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Share the journey of success with your friends and earn exciting rewards
        </p>
      </div>

      <div className="text-center mb-4">
        <p className="text-muted-foreground">Choose one reward option when your referral completes their first course:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="relative group h-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
          <div className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg h-full flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <GiftIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Option 1</h3>
            </div>
            <h4 className="text-2xl font-bold mb-6 text-primary">$500 Course Discount</h4>
            <p className="text-muted-foreground mb-6 flex-grow">
              Apply a $500 discount towards your next course registration
            </p>
            <div className="flex items-center text-primary gap-2">
              <AcademicCapIcon className="w-5 h-5" />
              <span>Perfect for continuous learning</span>
            </div>
          </div>
        </div>

        <div className="relative group h-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
          <div className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg h-full flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <UserPlusIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Option 2</h3>
            </div>
            <h4 className="text-2xl font-bold mb-6 text-primary">$150 Instant Cashback</h4>
            <p className="text-muted-foreground mb-6 flex-grow">
              Receive $150 direct cashback instead of the course discount
            </p>
            <div className="flex items-center text-primary gap-2">
              <BanknotesIcon className="w-5 h-5" />
              <span>Quick reward option</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>* Referral rewards are only applicable after the referred student successfully completes one course</p>
      </div>
    </section>
  )
} 