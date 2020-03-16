import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";



const datatableData = [
  ["Joe James", "Example Inc.", "email1@gmail.com", "Reason is nothing"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];


export default function Tables() {
	
  const [selectedFile, setSelectedFile] = useState(null);
	const uploadHandle = event => {
	console.log(event.target.files);
	console.log(event.target.files[0]);
	setSelectedFile(event.target.files);
	console.log(selectedFile);
  };

  const columns = [
	{
		name: "Site Name",
		options: {
		  filter: true,
		}
	},
	{
		label: "Name",
		name: "Name",
		options: {
		  filter: true,
		}
	},
	{
		name: "Email",
		options: {
		  filter: false,
		}
	},
	{
		name: "File",
		options: {
			filter: false,
			sort: false,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) => {
			  return (
				<>
				<Grid container spacing={1}>
				<Grid item>
				<Button variant="contained" size="small" color="secondary">
				Download
				</Button></Grid>
				<Grid item>
				<Button variant="contained" size="small" color="secondary" component="label">
				Upload
				<input
					type="file"
					name="file"
					style={{ display: "none" }}
					onChange={uploadHandle}
				/>
				</Button>
				</Grid>
				</Grid>
				</>
			  );
			}
		  }
	},
	{
		name: "Reason",
		options: {
		  filter: true,
		  sort: false,
		}
	},
	{
		name: "Action",
		options: {
			filter: false,
			sort: false,
			customBodyRender: (value, tableMeta, updateValue) => {
			  return (
				<>
				<Grid container spacing={1}>
				<Grid item>
				<Button variant="contained" size="small" color="secondary">
				Approve
				</Button>
				</Grid>
				<Grid item>
				<Button variant="contained" size="small" color="secondary">
				Reject
				</Button>
				</Grid>
				<Grid item>
				<Button variant="contained" size="small" color="secondary">
				Amend
				</Button>
				</Grid>
				</Grid>
				</>
			  );
			}
		  }
	},
  ];



  return (
    <>
      <PageTitle title="Approval" />
      <Grid container spacing={2} direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <MUIDataTable
            title="Requests List"
            data={datatableData}
            columns={columns}
            options={{
			  responsive: "scrollMaxHeight",
			  pagination: false,
			  setTableProps: () => ({
				//padding: "none",
				size: "small",
			  })
			}}
          />
        </Grid>
        </Grid>
    </>
  );
}
