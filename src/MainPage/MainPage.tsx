import "./MainPage.css";
import headerIcon from "../icons/headerIcon.svg";
import moon from "../icons/moon.svg";
import profilePhoto from "../icons/profilePhoto.svg";
import arrowDown from "../icons/arrowDown.svg";
import addInvoiceIcon from "../icons/addInvoiceIcon.svg";
import { useState } from "react";
import empty from "../icons/empty.svg";
import NewInvoice from "./newInvoice/NewInvoice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const MainPage = (props: any) => {
  const [showInvoiceBox, setShowInvoiceBox] = useState<boolean>(true);
  const [isNewInvoice, setIsNewInvoice] = useState<boolean>(false);
  const [newInvoicePage, setNewInvoicePage] = useState<boolean>(false);
  const [emptyBox, setEmptyBox] = useState<boolean>(false);

  const addNewInvoicePAge = () => {
    setNewInvoicePage(true);
    setShowInvoiceBox(false);
  };

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <img src={headerIcon} alt="headerIcon" className="headerIcon" />
        <img src={moon} alt="moon" className="moon" />
        <div className="headerLine"></div>
        <img src={profilePhoto} alt="profilePhoto" className="profilePhoto" />
      </div>

      {newInvoicePage ? (
        <NewInvoice />
      ) : (
        <div className="invoice_List_Add_Box">
          <div className="invoice_Box">
            <a className="header_Text_Invoince">Invoices</a>
            <a className="number_Of_Invoices_Text">7 invoices</a>
          </div>
          <div className="filter_Box">
            <a className="filter_Text">Filter</a>
            <img className="down_Arrow" src={arrowDown} alt="arrow" />
          </div>
          <img
            src={addInvoiceIcon}
            className="addInvoiceIcon"
            onClick={addNewInvoicePAge}
          />
        </div>
      )}

      {showInvoiceBox && (
        <div className="invoice_Info_Box">
          <div className="invoice_Info_subBox">
            <a className="invoice_Number">#RT3080</a>
            <a className="invoice_Owner">Dimitri Gugava</a>
          </div>
          <div className="invoice_Info_Second_subBox_Main">
            <div className="invoice_Info_Second_subBox">
              <a className="invoice_Due_Date">Due 19 Aug 2021</a>
              <a className="invoice_Ammount">$ 1,800.90</a>
            </div>
            <div className="status_Box">
              <div className="statusOval"></div>
              <a className="status_text">Paid</a>
            </div>
          </div>
        </div>
      )}
      {emptyBox && (
        <div className="empty_Box">
          <img className="empty" src={empty} />
          <div className="empty_Text_Box">
            <a className="empty_Text">There is nothing here</a>
            <a className="empty_Text2">
              Create an invoice by clicking the <br /> New Invoice button and
              get started
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
