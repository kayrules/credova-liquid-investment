Below is a ready-to-apply content + IA overhaul (labels, copy, CTAs, slugs) so you can “search & replace” and ship fast. I’m using **Ar-Rahnu** (Islamic pawnbroking) terms and avoiding “interest”—use **profit / ujrah (safekeeping fee) return** instead.

# What we call it

**“Shariah-Compliant Ar-Rahnu Receivables Marketplace”**
Short: **“Ar-Rahnu Receivables (Liquidity Investment)”**

# Role renaming (global)

- **Investor → Buyer**
- **Issuer → Seller (Pawnbroker / Ar-Rahnu operator)**

# Navigation (rename + restructure)

| Current               | New Label                                  | New Path               |
| --------------------- | ------------------------------------------ | ---------------------- |
| Home                  | Home                                       | `/`                    |
| SME Financing ▼       | **Receivables** ▼                          | `/receivables`         |
| — Invoice Financing-i | **For Sellers (Ar-Rahnu Operators)**       | `/receivables/sellers` |
| Invest ▼              | **For Buyers (Receivables)**               | `/receivables/buyers`  |
| How It Works          | How It Works                               | `/how-it-works`        |
| FAQ                   | FAQ                                        | `/faq`                 |
| About                 | About                                      | `/about`               |
| Sign In ▼             | **Sign In** ▼ → Buyer Login / Seller Login | `/auth/login`          |
| Sign Up Now           | **Get Started**                            | `/auth/register`       |

# Header CTAs

- Primary (left): **“Need Liquidity? (Seller)”** → `/receivables/sellers`
- Secondary (right): **“Looking to Buy Receivables? (Buyer)”** → `/receivables/buyers`

# Homepage hero (replace copy)

**Title:** _Innovative Shariah-Compliant Ar-Rahnu Liquidity_
**Subtitle:** _Liquid connects licensed pawnbrokers (Sellers) with qualified Buyers to trade Shariah-compliant Ar-Rahnu receivables. Asset-backed, short-tenor, transparent._
**Buttons:**

- **I’m a Seller – Get Liquidity**
- **I’m a Buyer – Browse Receivables**

# “Why Liquid?” (replace bullets)

- **Regulatory Alignment:** Built for Malaysia’s Ar-Rahnu ecosystem with Shariah governance and audit trail.
- **Asset-Backed:** Each receivable is secured by pledged collateral (e.g., gold).
- **Short Tenor, Fast Turnover:** Typical 1–6 months; active secondary exits via portfolio settlement.
- **Transparent Performance:** Cohort stats: redemption rate, aging, realised profit/ujrah.

# “How it Works” (two swimlanes)

**For Sellers (Pawnbrokers)**

1. **Onboard & Verify** – submit license, Shariah governance docs.
2. **Upload Receivables** – bulk CSV/JSON of active tickets; collateral & maturity.
3. **List Portfolio** – Liquid validates, assigns risk band, and lists as a deal.
4. **Receive Funding** – Buyer pays; you get liquidity. You continue servicing customers.
5. **Settle** – redemptions/auctions flow back to settle Buyer’s beneficial rights.

**For Buyers**

1. **Sign Up & KYC** – qualify as Buyer.
2. **Evaluate Deals** – view yield (profit/ujrah), tenor, risk band, track record.
3. **Commit & Pay** – subscribe to a portfolio (full or fractional).
4. **Monitor** – dashboards for collections, redeemers, auctions.
5. **Maturity** – receive principal + agreed profit from portfolio cashflows.

# FAQ (replace tops)

- **What am I buying as a Buyer?**
  Beneficial rights to cashflows from a pool of Ar-Rahnu receivables (profit/ujrah-based), not “interest”.
- **Is this Shariah-compliant?**
  Yes. Structure follows Ar-Rahnu (secured loan) with **ujrah** for safekeeping/service. Investment notes are reviewed under a Shariah framework and documented.
- **Who holds collateral?**
  The Seller (licensed pawnbroker) retains custody per Ar-Rahnu; Liquid records data and settlements.
- **What’s the typical tenor?**
  1–6 months; extensions and auctions are handled within policy and disclosed in deal docs.
- **How is risk managed?**
  Collateral coverage ratios, redemption history, auction procedures, concentration limits, and cohort analytics.

# Page-level content swaps

## `/receivables/sellers`

**H1:** _Turn Your Ar-Rahnu Receivables into Liquidity_
**Sub:** _Upload active tickets and access funding while you continue servicing customers._
**Bullets:** Quick onboarding · Bulk upload · Transparent fees · Same-day listing (once verified)
**CTA:** **List My Receivables**

## `/receivables/buyers`

**H1:** _Buy Shariah-Compliant Ar-Rahnu Receivables_
**Sub:** _Short-tenor, asset-backed cashflows with real-time performance data._
**Highlights:** Min commitment, Target profit/ujrah range, Historical redemption rate, Average LTV
**CTA:** **Browse Live Deals**

## `/how-it-works`

Keep the 4-step layout; update text to the two swimlanes above, or show a toggle **[For Sellers | For Buyers]**.

## `/faq`

Replace to the new FAQ above; add sections: _Onboarding_, _Shariah & Legal_, _Risk & Returns_, _Data & Privacy_.

# Sign-in dropdown (UI text)

- **Buyer login**
- **Seller login**
  (Sign-up mirrors these roles.)

# Footers (replace SME language)

- **Tagline:** _Shariah-compliant Ar-Rahnu Receivables Marketplace._
- Keep SC Malaysia/RMO disclaimer if applicable, update entity name and address as needed.

# Microcopy replacements (search → replace)

- “SME Financing” → “Receivables” / “Ar-Rahnu Receivables”
- “Invest” → “Buy Receivables”
- “Investor” → “Buyer”
- “Issuer” → “Seller”
- “Interest” → “Profit/Ujrah”
- “Loan” (when describing the product to end-MSME) → keep for education, but on marketplace copy use **“receivable”**/**“cashflow rights”**

# URL slugs (clean)

- `/receivables` (landing hub; short explainer, two CTAs)
- `/receivables/sellers`
- `/receivables/buyers`
- `/how-it-works`
- `/faq`
- `/about`
- `/auth/login` (role toggle)
- `/auth/register`

# Data widgets to add on Buyer page (MVP)

- **Cohort Redemption Rate:** last 12 months
- **Avg LTV at Origination**
- **Coverage Ratio (Collateral/Principal)**
- **Aging Buckets:** 0–30, 31–60, 61–90, >90 days
- **Shariah Notes:** structure summary + downloadable policy

# Quick string map (for i18n or CMS seed)

```json
{
  "brandLine": "Shariah-Compliant Ar-Rahnu Receivables Marketplace",
  "hero.title": "Innovative Shariah-Compliant Ar-Rahnu Liquidity",
  "hero.subtitle": "Connects licensed pawnbrokers (Sellers) with qualified Buyers to trade Ar-Rahnu receivables—asset-backed, short-tenor, transparent.",
  "cta.seller": "I’m a Seller – Get Liquidity",
  "cta.buyer": "I’m a Buyer – Browse Receivables",
  "nav.home": "Home",
  "nav.receivables": "Receivables",
  "nav.sellers": "For Sellers",
  "nav.buyers": "For Buyers",
  "nav.how": "How It Works",
  "nav.faq": "FAQ",
  "nav.about": "About",
  "nav.signin": "Sign In",
  "nav.signup": "Get Started",
  "auth.buyerLogin": "Buyer login",
  "auth.sellerLogin": "Seller login"
}
```
