import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SearchBar from "material-ui-search-bar";
import { Icon, TextField } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import AddIcon from "@material-ui/icons/Add";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";
import dataSource from "../../dataSource.js";

const styles = {
  buttonWrap: {
    textAlign: "right"
  },
  createButton: {
    marginLeft: "15px",
    marginBottom: "20px",
    justifyContent: "flex-end"
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  textTitle: {
    fontSize: "2rem",
    fontWeight: "400",
    textAlign: "center",
    color: "black"
  }
};

const useStyles = makeStyles(styles);

const headCells = [
  { id: "important", numeric: false, disablePadding: false, label: "" },
  {
    id: "reportName",
    numeric: false,
    disablePadding: true,
    label: "Tên báo cáo"
  },
  { id: "owner", numeric: true, disablePadding: false, label: "Người tạo" },
  {
    id: "lastOpenAt",
    numeric: true,
    disablePadding: false,
    label: "Mở lần cuối"
  },
  { id: "type", numeric: true, disablePadding: false, label: "Loại báo cáo" },
  { id: "action", numeric: false, disablePadding: false, label: "" }
];

export default function Typography() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          <p className={classes.textTitle}>Báo cáo gần đây</p>
          <div className={classes.buttonWrap}>
            {/* <Link to="/create">
              <Button
                className={classes.createButton}
                type="button"
                variant="contained"
                color="info"
              >
                <AddIcon /> &nbsp; TẠO BÁO CÁO
              </Button>
            </Link> */}
          </div>
        </div>

        <Card>
          <CardHeader color="info">
            {/* <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}

            <SearchBar
              placeholder="Tìm kiếm báo cáo"
              value={searchValue}
              onChange={newValue => setSearchValue(newValue)}
              onRequestSearch={() => console.log("SEARCH VALUE", searchValue)}
              style={{
                margin: "0 auto",
                maxWidth: 800
              }}
            />
            {/* <Autocomplete
              id="combo-box-demo"
              options={dataSource}
              getOptionLabel={option => option.name}
              style={{ width: fullWidth, backgroundColor: "#FFF" }}
              popupIcon={() => {
                return null;
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            /> */}
          </CardHeader>
          <CardBody>
            <Table
              rows={dataSource.filter(data => data.justOpen == true)}
              headCells={headCells}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}
