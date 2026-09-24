import { PiHairDryer, PiFlowerLotus } from "react-icons/pi";
import { GiThreeLeaves, GiTeapotLeaves } from "react-icons/gi";

export const LB = <br />;
export const div = <div className="divider"></div>;

const titleStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  textDecoration: "underline",
};

const listStyles = {
  listStyleType: "square",
  lineHeight: "23px",
};

export const services = [
  {
    icon: <GiThreeLeaves />,
    title: "Scalp Wellness",
    text: (
      <ul style={listStyles}>
        <li>
          <b>Signature Scalp Detox ............................. $45+</b> {LB}{" "}
          (Deep cleanse to remove buildup, excess oils & impurities) {LB}
          {LB}
        </li>
        <li>
          <b>Customized Scalp Treatment ................ $55+</b> {LB}{" "}
          (Hydrating, soothing or strengthening treatment customized to your
          scalp needs)
          {LB}
          {LB}
        </li>
        <li>
          <b>Custom Botanical Scalp Oil Blend ........ $35</b> {LB} (Take-home
          personalized scalp oil created just for your hair goals){LB}
          {LB}
        </li>
        <li>
          <b>Add-on to a service ...................................... $20</b>{" "}
          {LB}
        </li>
      </ul>
    ),
  },
  {
    icon: <PiHairDryer />,
    title: "Hair Expertise",
    text: (
      <ul style={listStyles}>
        <p style={titleStyles}>Hair Treatment</p>
        <li>
          <b>Deep Conditioning Treatment .............. $35</b> {LB}
          {LB}
        </li>
        <li>
          <b>Protein/Reconstructive Treatment .... $45+</b> {LB}
          {LB}
        </li>
        <li>
          <b>Steam Therapy Upgrade .......................... $20</b> {LB}
          {LB}
        </li>
        <p style={titleStyles}>Cut & Style</p>
        <li>
          <b>Women's Haircut ....................................... $45+</b>{" "}
          {LB}
        </li>
        <li>
          <b>
            Men's Haircut ............................................... $25+
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>Kid's Haircut (12 & Under) ....................... $20+</b> {LB}
        </li>
        <li>
          <b>Shampoo & Style ........................................ $65+</b>{" "}
          {LB}
        </li>
        <li>
          <b>
            Silk Press ........................................................
            $75+
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>
            Blowout ..........................................................
            $55+
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>Flat Iron/Curl Finish .................................. $25+</b>{" "}
          {LB}
        </li>
        <p style={titleStyles}>Color Services {LB}</p>
        <li>
          <b>Root Touch Up ............................................ $85+</b>{" "}
          {LB}
        </li>
        <li>
          <b>Single Process Color ................................ $110+</b>{" "}
          {LB}
        </li>
        <li>
          <b>Partial Highlights ...................................... $135+</b>{" "}
          {LB}
        </li>
        <li>
          <b>
            Full Highlights ............................................ $175+
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>Balayage (Sweeping Freehand) ........ $200+</b> {LB}
        </li>
        <li>
          <b>Color Melt/Ombre ..................................... $210+</b>{" "}
          {LB}
        </li>
        <li>
          <b>Fantasy/Vivid Colors ............................... $250+</b> {LB}
        </li>
        <li>
          <b>
            Gloss/Toner .................................................. $45+
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>
            Color Correction (Consultation Required. Price starts at $300 for
            the correction)
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>
            (PLEASE NOTE: All prices vary based on hair length, density & color
            goals)
          </b>{" "}
          {LB}
        </li>
        <p style={titleStyles}>Dreadloc Specialist</p>
        <li>
          <b>
            Starter Locs ..................................................
            $125+
          </b>{" "}
          {LB}
        </li>
        <li>
          <b>
            Loc Retwist ................................................... $95+
          </b>
          {LB}
        </li>
        <li>
          <b>
            Loc Style .........................................................
            $45+
          </b>
          {LB}
        </li>
        <li>
          <b>Retwist + Style .............. $135+ ($5 discount!)</b>
          {LB}
        </li>
        <li>
          <b>
            Loc Repair ......................................... $25 per loc
          </b>
          {LB}
        </li>
        <li>
          <b>
            Loc Detox .......................................................
            $75+
          </b>
          {LB}
        </li>
        <li>
          <b>
            Loc Color .......................................................
            $125+
          </b>
          {LB}
        </li>
        <li>
          <b>
            Loc Trim/Cut .................................................. $35+
          </b>
          {LB}
        </li>
        <li>
          <b>Instant Locs .......... (Consultation Required)</b>
          {LB}
        </li>
        <p style={titleStyles}>Extentions & Braids</p>
        <li>
          <b>Tape-in Extentions ... (Consultation Required)</b>
          {LB}
        </li>
        <li>
          <b>Microlinks .............. (Consultation Required)</b>
          {LB}
        </li>
        <li>
          <b>Extension Maintenance ........................... $95+</b>
          {LB}
        </li>
        <li>
          <b>Glued-in Styles ......................... (Start at $75+)</b>
          {LB}
        </li>
        <p style={titleStyles}>Fantasy Hair</p>
        <li>
          <b>Customer Hairpiece Design ................. $150+</b>
          {LB}
        </li>
        <li>
          <b>
            Fantasy Styling ........................................... $125+
          </b>
          {LB}
        </li>
        <li>
          <b>
            Festival Hair ................................................. $95+
          </b>
          {LB}
        </li>
        <li>
          <b>Photoshoot Styling ... (Consultation Required)</b>
          {LB}
        </li>
        <li>
          <b>
            Fantasy Install ............................................. $75+
          </b>
          {LB}
        </li>
      </ul>
    ),
  },
  {
    icon: <GiTeapotLeaves />,
    title: "Beauty Elevated & Wellness with Purpose",
    text: (
      <ul>
        <p style={titleStyles}>Waxing</p>
        <li>
          <b>
            Eyebrows ...........................................................
            $18
          </b>
          {LB}
        </li>
        <li>
          <b>
            Lip
            .........................................................................
            $12
          </b>
          {LB}
        </li>
        <li>
          <b>
            Chin
            ......................................................................
            $15
          </b>
          {LB}
        </li>
        <li>
          <b>Lip & Chin ............................ $22 ($5 discount!)</b>
          {LB}
        </li>
        <li>
          <b>
            Underarms .......................................................
            $25
          </b>
          {LB}
        </li>
        <li>
          <b>
            Half Legs
            ........................................................... $40
          </b>
          {LB}
        </li>
        <li>
          <b>
            Full Legs
            ............................................................ $65
          </b>
          {LB}
        </li>
        <li>
          <b>
            Bikini
            ..................................................................
            $45
          </b>
          {LB}
        </li>
        <li>
          <b>
            Brazilian
            ............................................................ $75
          </b>
          {LB}
        </li>
        <p style={titleStyles}>Yoni Steam</p>
        <li>
          <b>
            (30 to 40 mins in a peaceful, herbal steam designed to support
            self-care & relaxation)
            ........................................................ $55
          </b>
          {LB}
          {LB}
        </li>
        <li>
          <b>
            (Upgrade the experience with herbal tea & guided meditation for only
            $15 more!)
          </b>
          {LB}
        </li>
        <p style={titleStyles}>Bridal & Special Events</p>
        <li>
          <b>
            Wedding Hair ............................................. $150+
          </b>
          {LB}
        </li>
        <li>
          <b>Bridal Party Styling .................................. $125+</b>
          {LB}
        </li>
        <li>
          <b>
            Photoshoots ................................................ $125+
          </b>
          {LB}
        </li>
        <li>
          <b>
            Special Events ............................................ $150+
          </b>
          {LB}
        </li>
        <li>
          <b>Fantasy Editorial Styling ....................... $175+</b>
          {LB}
        </li>
        <li>
          <b>(Please inquire for custom packages)</b>
          {LB}
        </li>
      </ul>
    ),
  },
  {
    icon: <PiFlowerLotus />,
    title: "Additional Services/Add ons",
    text: (
      <ul>
        <p style={titleStyles}>Cannabis Wedding Services</p>
        <li>
          <b>Infused Bridal Party Styling</b>
          {LB}
        </li>
        <li>
          <b>Cannabis Flower & Herb Bar</b>
          {LB}
        </li>
        <li>
          <b>Custom Mocktail Menu</b>
          {LB}
        </li>
        <li>
          <b>420 Friendly Lounge Setup</b>
          {LB}
        </li>
        <li>
          <b>Themed Decor & Ambiance</b>
          {LB}
        </li>
        <li>
          <b>(Please inquire for custom packages & pricing)</b>
          {LB}
        </li>
        <p style={titleStyles}>Consultations</p>
        <li>
          <b>Color Consultation ........................................ $25</b>
          {LB}
        </li>
        <li>
          <b>Extension Consultation .............................. $25</b>
          {LB}
        </li>
        <li>
          <b>Fantasy Hair Consultation ........................ $30</b>
          {LB}
        </li>
        <li>
          <b>(Consultation fees can be applied toward your booked service)</b>
          {LB}
        </li>
      </ul>
    ),
  },
];
