import "./NewInvoice.css";
import goBackIcon from "../../icons/gobackicon.svg";
import deleteIcon from "../../icons/deleteIcon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { on } from "events";
import { useState } from "react";

const NewInvoice = (props: any) => {
  // const [shouldSubmitForm, setShouldSubmitForm] = useState(false);

  const schema = yup.object().shape({
    streetAddress: yup.string().required("street address is required"),
    city: yup.string().required("city is required"),
    postCode: yup.string().required("post code is required"),
    country: yup.string().required("country is required"),
    clientName: yup.string().required("client name is required"),
    clientEmail: yup.string().required("client email is required"),
    invoiceDate: yup.string().required("invoice date is required"),
    paymentTerms: yup.string().required("payment terms is required"),
    projectDescription: yup
      .string()
      .required("project description is required"),
    itemName: yup.string().required("item name is required"),
    qty: yup.string().required("qty is required"),
    price: yup.string().required("price is required"),
    total: yup.string().required("total is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: any) => {
  //   console.log(data);
  //   setShouldSubmitForm(false);
  // };

  const addNewInvoice = () => {
    props.setShouldSubmitForm(true);
  };

  const resetForm = () => {
    reset();
    props.setShouldSubmitForm(false);
  };

  const goBackToMainPage = () => {
    props.setNewInvoicePage(false);
    props.setShowInvoiceBox(true);
  };

  return (
    <form
      className="newInvoice_Container"
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <div className="scroolRectangle"></div>
      <div className="goBack">
        <img
          className="goBackIcon"
          src={goBackIcon}
          onClick={goBackToMainPage}
        />
        <a className="goBackText" onClick={goBackToMainPage}>
          Go back
        </a>
      </div>
      <a className="newInvoice_Large_Text">New Invoice</a>
      <a className="billForm_Text">Bill Form</a>
      <div className="input_Box">
        <a className="input_Text_Header">Street Address</a>
        <input
          type="text"
          placeholder="Street Address..."
          className="inputText"
          {...register("streetAddress")}
        />
      </div>
      <div className="city_PostCode_Box">
        <div className="city_Box">
          <a className="input_Text_Header_City">City</a>
          <input
            type="text"
            placeholder="City..."
            className="inputText_City"
            {...register("city")}
          />
        </div>
        <div className="postCode_Box">
          <a className="input_Text_Header_Post">Post Code</a>
          <input
            type="text"
            placeholder="Post Code..."
            className="inputText_PostCode"
            {...register("postCode")}
          />
        </div>
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Country</a>
        <input
          type="text"
          placeholder="Country..."
          className="inputText"
          {...register("country")}
        />
      </div>
      <a className="billForm_Text">Bill To</a>
      <div className="input_Box">
        <a className="input_Text_Header">Client's Name</a>
        <input
          type="text"
          placeholder="Client's Name..."
          className="inputText"
          {...register("clientName")}
        />
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Client's Email</a>
        <input
          type="text"
          placeholder="Client's Email..."
          className="inputText"
          {...register("clientEmail")}
        />
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Street Address</a>
        <input
          type="text"
          placeholder="Street Address..."
          className="inputText"
          {...register("streetAddress")}
        />
      </div>
      <div className="city_PostCode_Box">
        <div className="city_Box">
          <a className="input_Text_Header_City">City</a>
          <input
            type="text"
            placeholder="City..."
            className="inputText_City"
            {...register("city")}
          />
        </div>
        <div className="postCode_Box">
          <a className="input_Text_Header_Post">Post Code</a>
          <input
            type="text"
            placeholder="Post Code..."
            className="inputText_PostCode"
            {...register("postCode")}
          />
        </div>
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Country</a>
        <input
          type="text"
          placeholder="Country..."
          className="inputText"
          {...register("country")}
        />
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Invoice Date</a>
        <input
          type="date"
          placeholder="Due Date..."
          className="inputText"
          {...register("invoiceDate")}
        />
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Payment Terms</a>
        <input
          type="text"
          placeholder="Net 30 Days..."
          className="inputText"
          {...register("paymentTerms")}
        />
      </div>
      <div className="input_Box">
        <a className="input_Text_Header">Project Description</a>
        <input
          type="text"
          placeholder="Graphic Design..."
          className="inputText"
          {...register("projectDescription")}
        />
      </div>
      <a className="item_List">Item List</a>
      <div className="item_Box">
        <div className="item_Box_Header">
          <a className="item_Box_Header_Text">Item Name</a>
          <input
            type="text"
            className="item_Box_Tite"
            placeholder="Banner Design"
            {...register("itemName")}
          />
        </div>
        <div className="item_Box_Info_Box">
          <div className="item_Small_Box">
            <a className="item_Box_Header_Text">Qty.</a>
            <input
              type="text"
              className="item_Box_Tite_Box"
              placeholder="1"
              {...register("qty")}
            />
          </div>
          <div className="item_Small_Box">
            <a className="item_Box_Header_Text">Price</a>
            <input
              type="text"
              className="item_Box_Tite_Box"
              placeholder="$ 1,800"
              {...register("price")}
            />
          </div>
          <div className="item_Small_Box">
            <a className="item_Box_Header_Text">Total</a>
            <input
              type="text"
              className="item_Box_Tite_Box"
              placeholder="$ 1,800"
              {...register("total")}
            />
          </div>
          <img className="deleteIcon" src={deleteIcon} />
        </div>
      </div>
      <div className="item_Box">
        <div className="item_Box_Header">
          <a className="item_Box_Header_Text">Item Name</a>
          <input
            type="text"
            className="item_Box_Tite"
            placeholder="Email Design"
            {...register("itemName")}
          />
        </div>
        <div className="item_Box_Info_Box">
          <div className="item_Small_Box">
            <a className="item_Box_Header_Text">Qty.</a>
            <input
              type="text"
              className="item_Box_Tite_Box"
              placeholder="1"
              {...register("qty")}
            />
          </div>
          <div className="item_Small_Box">
            <a className="item_Box_Header_Text">Price</a>
            <input
              type="text"
              className="item_Box_Tite_Box"
              placeholder="$ 1,800"
              {...register("price")}
            />
          </div>
          <div className="item_Small_Box">
            <a className="item_Box_Header_Text">Total</a>
            <input
              type="text"
              className="item_Box_Tite_Box"
              placeholder="$ 1,800"
              {...register("total")}
            />
          </div>
          <img className="deleteIcon" src={deleteIcon} />
        </div>
      </div>
      <button className="submitButton">+ Add New Item</button>
      <div className="bottom_Box">
        <button className="discard" onClick={resetForm}>
          Discard
        </button>
        <button className="saveAsDraft" onClick={addNewInvoice}>
          Save as Draft
        </button>
        <button className="saveAndSend">Save & Send</button>
      </div>
    </form>
  );
};

export default NewInvoice;
