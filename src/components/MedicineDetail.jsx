import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LinearProgress from "@mui/material/LinearProgress";

function MedicineDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  // Call to the api to receive the data of the chosen drug, in addition we use useEffect to load it as ini state.
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.fda.gov/drug/label.json?search=${id}`
        );
        setDetail(response.data.results[0]);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!detail) return <LinearProgress color="inherit" />;

  return (
    <div className="medicine-detail-container">
      <h2 className="medicine-title">
        {detail.openfda && detail.openfda.brand_name
          ? detail.openfda.brand_name
          : "Brand Name Not Available"}
      </h2>
      <div className="medicine-info">
        <p>
          <strong>Description:</strong>{" "}
          {detail.description || "Description Not Available"}
        </p>
        <p>
          <strong>Active Ingredient:</strong>{" "}
          {detail.active_ingredient || "Active Ingredient Not Available"}
        </p>
        <p>
          <strong>Dosage and Administration:</strong>{" "}
          {detail.dosage_and_administration ||
            "Dosage and Administration Not Available"}
        </p>
        <p>
          <strong>Warnings:</strong>{" "}
          {detail.warnings || "Warnings Not Available"}
        </p>
        <p>
          <strong>Indications and Usage:</strong>{" "}
          {detail.indications_and_usage ||
            "Indications and Usage Not Available"}
        </p>
        <p>
          <strong>Keep Out of Reach of Children:</strong>{" "}
          {detail.keep_out_of_reach_of_children ||
            "Keep Out of Reach of Children Information Not Available"}
        </p>
      </div>
    </div>
  );
}

export default MedicineDetail;
