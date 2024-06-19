import React from "react";
import { Link } from "react-router-dom";
// Styles
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function SearchResults({ results }) {
  return (
    <div className="list-results">
      
        {results.map((result) => (
          <div className="list-item" key={result.id}>
          <Card className="target-medicament">
            <CardContent className="card-content">
              {result.openfda.brand_name || "Name not available"}
            </CardContent>
            <CardActions className="card-actions">
              <Link to={`/detail/${result.id}`} className="learn-more-link">Learn more</Link>
            </CardActions>
          </Card>
        </div>
        ))}
     
    </div>
  );
}

export default SearchResults;
