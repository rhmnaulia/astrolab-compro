import React from "react";
import { Button } from "../../globalStyles";
import { MdWeb } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiPencilBrush />
                </PricingCardIcon>
                <PricingCardPlan>UI/UX DESIGN</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>Friendly Design</PricingCardFeature>
                  <PricingCardFeature>Affordable</PricingCardFeature>
                  <PricingCardFeature>Eye Pleasing</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Service</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdWeb />
                </PricingCardIcon>
                <PricingCardPlan>WEB DEVELOPMENT</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>Mobile Friendly</PricingCardFeature>
                  <PricingCardFeature>Lightweight</PricingCardFeature>
                  <PricingCardFeature>Optimized SEO</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Service</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoIosPhonePortrait />
                </PricingCardIcon>
                <PricingCardPlan>MOBILE DEVELOPMENT</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>Lightweight</PricingCardFeature>
                  <PricingCardFeature>Hybrid</PricingCardFeature>
                  <PricingCardFeature>Responsive</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Service</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
