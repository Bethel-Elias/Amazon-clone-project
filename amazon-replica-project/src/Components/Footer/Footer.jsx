import React from 'react'
import classes from './footer.module.css'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  return (
    <section className={classes.footer_all}>
      <hr />
      <div className={classes.footer_top}>
        <div className={classes.footer_para}>
          <p>
            After viewing product detail page, look here to find an easyway to
            navigate back to pages you are interested in.
          </p>
        </div>

        <div className={classes.footer_link}>
          <ul>
            <IoIosArrowForward />
            <li>
              <Link to="#">View or edit your browsing history</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <h4 className={classes.footer_h3}>Back to top</h4>

      <section className={classes.footer_4links}>
        <div className={classes.footer_link_one}>
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">About Amazon</Link>
            </li>
            <li>
              <Link to="#">Investor Relations</Link>
            </li>
            <li>
              <Link to="#">Amazon Devices</Link>
            </li>
            <li>
              <Link to="#">Amazon Science</Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer_link_two}>
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <Link to="#">Sell products on Amazon</Link>
            </li>
            <li>
              <Link to="#">Sell on Amazon Business</Link>
            </li>
            <li>
              <Link to="#">Sell apps on Amazon</Link>
            </li>
            <li>
              <Link to="#">Become an Affiliate</Link>
            </li>
            <li>
              <Link to="#">Advertise your products</Link>
            </li>
            <li>
              <Link to="#">Self-publish with us</Link>
            </li>
            <li>
              <Link to="#">Host an Amazon Hub</Link>
            </li>
            <li>
              <Link to="#">
                <IoIosArrowForward />
                See More Make Money with Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer_link_three}>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <Link to="#">Amazon Business Card</Link>
            </li>
            <li>
              <Link to="#">Shop with Points</Link>
            </li>
            <li>
              <Link to="#">Reload Your Balance</Link>
            </li>
            <li>
              <Link to="#">Amazon Currency Converter</Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer_link_four}>
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <Link to="#">Amazon and COVID-19</Link>
            </li>
            <li>
              <Link to="#">Your Account</Link>
            </li>
            <li>
              <Link to="#">Your Orders</Link>
            </li>
            <li>
              <Link to="#">Shipping Rates & policies</Link>
            </li>
            <li>
              <Link to="#">Returns & Replacements</Link>
            </li>
            <li>
              <Link to="#">Manage your content and devices</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
          </ul>
        </div>
      </section>
      <hr />

      <section className={classes.footer_all_icons}>
        <div className={classes.footer_logo_img}>
          <Link to="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className={classes.footer_three_icons}>
          <div>
            <Link to="#">
              <MdOutlineLanguage />
              English
              <RiExpandUpDownFill />
            </Link>
          </div>
          <div>
            <Link to="#">$ USD - U.S.Dollar</Link>
          </div>
          <div className={classes.footer_flag_img}>
            <Link to="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/640px-Flag_of_the_United_States_%281912-1959%29.svg.png"
                alt="USA flag"
              />
              United States
            </Link>
          </div>
        </div>
      </section>

      <section className={classes.footer_lower}>
        <section className={classes.footer_lower_links}>
          <div className={classes.footer_h4link}>
            <div>
              <h4>Amazon Music</h4>
              <Link to="#">Stream millions of songs</Link>
            </div>
            <div>
              <h4>Amazon Business</h4>
              <Link to="#">Everything for your business</Link>
            </div>
            <div>
              <h4>IMDbPro</h4>
              <Link to="#">Get Info Entertainment Professionals Need</Link>
            </div>
          </div>
          <div className={classes.footer_h4link}>
            <div>
              <h4>Amazon Ads</h4>
              <Link to="#">Reach customers wherever they spend their time</Link>
            </div>
            <div>
              <h4>AmazonGlobal</h4>
              <Link to="#">Ship Orders Internationally</Link>
            </div>
            <div>
              <h4>Kindle Direct Publishing</h4>
              <Link to="#">Indie Digital & Print Publishing Made Easy</Link>
            </div>
            <div>
              <h4>eero WiFi</h4>
              <Link to="#">Stream 4K video in Every Room</Link>
            </div>
          </div>
          <div className={classes.footer_h4link}>
            <div>
              <h4>6pm</h4>
              <Link to="#">Score deals on fashion brands</Link>
            </div>
            <div>
              <h4>Amazon Web Services</h4>
              <Link to="#">Scalable cloud competing services</Link>
            </div>
            <div>
              <h4>Prime video Direct</h4>
              <Link to="#">Video Distribution made Easy</Link>
            </div>
            <div>
              <h4>Blink</h4>
              <Link to="#">Smart Security for Every Home</Link>
            </div>
          </div>
          <div className={classes.footer_h4link}>
            <div>
              <h4>AbeBooks</h4>
              <Link to="#">Books,Art & collectibles</Link>
            </div>
            <div>
              <h4>Audible</h4>
              <Link to="#">Listen to books & Original Audio Performances</Link>
            </div>
            <div>
              <h4>Shopbop</h4>
              <Link to="#">Designer Fashion Brands</Link>
            </div>
            <div>
              <h4>Neighbors App</h4>
              <Link to="#">Real-time crime and safety Alerts</Link>
            </div>
          </div>
          <div className={classes.footer_h4link}>
            <div>
              <h4>ACX</h4>
              <Link to="#">Audio publishing made Easy</Link>
            </div>
            <div>
              <h4>Box office Mojo</h4>
              <Link to="#">Find Movie Box office Data</Link>
            </div>
            <div>
              <h4>Woot!</h4>
              <Link to="#">Deals and Shenanigans</Link>
            </div>
            <div>
              <h4>Amazon Subscrption Boxes</h4>
              <Link to="#">Top subscription Boxes- right to your door</Link>
            </div>
          </div>
          <div className={classes.footer_h4link}>
            <div>
              <h4>Sell on Amazon</h4>
              <Link to="#">Start a selling Account</Link>
            </div>
            <div>
              <h4>Goodreads</h4>
              <Link to="#">Book reviews & recommendations</Link>
            </div>
            <div>
              <h4>Zappos</h4>
              <Link to="#">shoes & clothing</Link>
            </div>
            <div>
              <h4>PillPack</h4>
              <Link to="#">Pharmacy simplified</Link>
            </div>
          </div>
          <div className={classes.footer_h4link}>
            <div>
              <h4>Veeqo</h4>
              <Link to="#">Shipping Software Inventory Management</Link>
            </div>
            <div>
              <h4>IMDB</h4>
              <Link to="#">Movies, TV & Celebrities</Link>
            </div>
            <div>
              <h4>Ring</h4>
              <Link to="#">Smart Home Security Systems</Link>
            </div>
          </div>
        </section>
        <div className={classes.footer_ul}>
          <ul>
            <li>
              <Link to="#">Conditions of Use</Link>
            </li>
            <li>
              <Link to="#">Privacy Notice</Link>
            </li>
            <li>
              <Link to="#">Customer Health Data Privacy Disclosure</Link>
            </li>
            <li>
              <Link to="#">Your Ads Privacy choises</Link>
            </li>
          </ul>
        </div>
        <p>
          <MdOutlineCopyright />
          1996-2025 Amazon.com,Inc. or its affiliates
        </p>
      </section>
    </section>
  );
}

export default Footer