import React from 'react';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export type typeOfFields = {
    FMID: number,
    MarketName: string;
    Website: string;
    Facebook: string;
    Twitter: string;
    Youtube: string;
    OtherMedia: string;
    street: string;
    city: string;
    County: string;
    State: string;
    zip: string;
    Season1Date: string;
    Season1Time: string;
    Season2Date: string;
    Season2Time: string;
    Season3Date: string;
    Season3Time: string;
    Season4Date: string;
    Season4Time: string;
    x:number;
    y: number;
    Location: string;
    Credit:  string;
    WIC:  string;
    WICcash: string;
    SFMNP:  string;
    SNAP: string;
    Organic:  string;
    Bakedgoods:  string;
    Cheese:  string;
    Crafts:  string;
    Flowers:  string;
    Eggs:  string;
    Seafood: string;
    Herbs:  string;
    Vegetables:  string;
    Honey:  string;
    Jams:  string;
    Maple:  string;
    Meat:  string;
    Nursery: string;
    Nuts: string;
    Plants: string;
    Poultry:  string;
    Prepared:  string;
    Soap:  string;
    Trees:  string;
    Wine: string;
    Coffee:  string;
    Beans:  string;
    Fruits:  string;
    Grains: string;
    Juices: string;
    Mushrooms:  string;
    PetFood:  string;
    Tofu: string;
    WildHarvested: string;
    updateTime: string;
  }

type TableViewProps = {
  receivedData: Array<typeOfFields>;
  // searchText: string;
}


interface Column {
  id: 'FMID' | 'MarketName' | 'Website' | 'Facebook' | 'Twitter' | 'Youtube' | 'OtherMedia' | 'street' | 'city' | 'County' | 'State' | 'zip' | 'Season1Date' | 'Season1Time' | 'Season2Date' | 'Season2Time'
  |'Season3Date' | 'Season3Time' | 'Season4Date' | 'Season4Time'| 'x' | 'y' | 'Location' | 'Credit' | 'WIC' | 'WICcash' | 'SFMNP' | 'SNAP' | 'Organic' | 'Bakedgoods' | 'Cheese' | 'Crafts' | 'Flowers' | 'Eggs' | 'Seafood' | 'Herbs' | 'Vegetables' |
  'Honey' | 'Jams' | 'Maple' | 'Meat' | 'Nursery' | 'Nuts' | 'Plants' | 'Poultry' | 'Prepared' | 'Soap' | 'Trees' | 'Wine' | "Coffee" | 'Beans' | 'Fruits' | 'Grains' | 'Juices' |
  'Mushrooms' | 'PetFood' | 'Tofu' | 'WildHarvested' | 'updateTime'
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'FMID', label: 'FMID', minWidth: 70 },
  { id: 'MarketName', label: 'MarketName', minWidth: 100 },
  {
    id: 'Website',
    label: 'Website',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Facebook',
    label: 'Facebook',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Twitter',
    label: 'Twitter',
    minWidth: 170,
    align: 'center',
  },
  { id: 'Youtube', label: 'Youtube', minWidth: 100 },
  { id: 'OtherMedia', label: 'OtherMedia', align: 'center',minWidth: 100 },
  { id: 'street', label: 'street', minWidth: 100 },
  { id: 'city', label: 'city', align: 'center', minWidth: 100 },
  { id: 'County', label: 'County', align: 'center', minWidth: 100 },
  { id: 'State', label: 'State',align: 'center', minWidth: 100 },
  { id: 'zip', label: 'zip', align: 'center', minWidth: 100 },
  { id: 'Season1Date', label: 'Season1Date', align: 'center', minWidth: 100 },
  { id: 'Season1Time', label: 'Season1Time', align: 'center', minWidth: 100 },
  { id: 'Season2Date', label: 'Season2Date', align: 'center', minWidth: 100 },
  { id: 'Season2Time', label: 'Season2Time', align: 'center', minWidth: 100 },
  { id: 'Season3Date', label: 'Season3Date', align: 'center', minWidth: 100 },
  { id: 'Season3Time', label: 'Season3Time', align: 'center', minWidth: 100 },
  { id: 'Season4Date', label: 'Season4Date', align: 'center', minWidth: 100 },
  { id: 'Season4Time', label: 'Season4Time', align: 'center', minWidth: 100 },
  
  { id: 'x', label: 'x', align: 'center', minWidth: 100 },
  { id: 'y', label: 'y', align: 'center', minWidth: 100 },
  { id: 'Location', label: 'Location', align: 'center', minWidth: 100 },
  { id: 'Credit', label: 'Credit', align: 'center', minWidth: 50 },
  { id: 'WIC', label: 'WIC', align: 'center', minWidth: 50 },
  { id: 'WICcash', label: 'WICcash', align: 'center', minWidth: 50 },
  { id: 'SFMNP', label: 'SFMNP', align: 'center', minWidth: 50 },
  { id: 'SNAP', label: 'SNAP', align: 'center', minWidth: 50 },
  { id: 'Organic', label: 'Organic', align: 'center', minWidth: 50 },
  { id: 'Bakedgoods', label: 'Bakedgoods', align: 'center', minWidth: 50 },
  { id: 'Cheese', label: 'Cheese', align: 'center', minWidth: 50 },
  { id: 'Crafts', label: 'Crafts', align: 'center', minWidth: 50 },
  { id: 'Flowers', label: 'Flowers', align: 'center', minWidth: 50 },
  { id: 'Eggs', label: 'Eggs', align: 'center', minWidth: 50 },
  { id: 'Seafood', label: 'Seafood', align: 'center', minWidth: 50 },
  { id: 'Herbs', label: 'Herbs', align: 'center', minWidth: 50 },
  { id: 'Vegetables', label: 'Vegetables', align: 'center', minWidth: 50 },
  { id: 'Honey', label: 'Honey', align: 'center', minWidth: 50 },
  { id: 'Jams', label: 'Jams', align: 'center', minWidth: 50 },
  { id: 'Maple', label: 'Maple', align: 'center', minWidth: 50 },
  { id: 'Meat', label: 'Meat', align: 'center', minWidth: 50 },
  { id: 'Nursery', label: 'Nursery', align: 'center', minWidth: 50 },
  { id: 'Nuts', label: 'Nuts', align: 'center', minWidth: 50 },
  { id: 'Plants', label: 'Plants', align: 'center', minWidth: 50 },
  { id: 'Poultry', label: 'Poultry', align: 'center', minWidth: 50 },
  { id: 'Prepared', label: 'Prepared', align: 'center', minWidth: 50 },
  { id: 'Soap', label: 'Soap', align: 'center', minWidth: 50 },
  { id: 'Trees', label: 'Trees', align: 'center', minWidth: 50 },
  { id: 'Wine', label: 'Wine', align: 'center', minWidth: 50 },
  { id: 'Coffee', label: 'Coffee', align: 'center', minWidth: 50 },
  { id: 'Beans', label: 'Beans', align: 'center', minWidth: 50 },
  { id: 'Fruits', label: 'Fruits', align: 'center', minWidth: 50 },
  { id: 'Grains', label: 'Grains', align: 'center', minWidth: 50 },
  { id: 'Juices', label: 'Juices', align: 'center', minWidth: 50 },
  { id: 'Mushrooms', label: 'Mushrooms', align: 'center', minWidth: 50 },
  { id: 'PetFood', label: 'PetFood', align: 'center', minWidth: 50 },
  { id: 'Tofu', label: 'Tofu', align: 'center', minWidth: 50 },
  { id: 'WildHarvested', label: 'WildHarvested', align: 'center', minWidth: 50 },
  { id: 'updateTime', label: 'updateTime', align: 'center', minWidth: 100 },

];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(FMID: number, MarketName: string, Website: string, Facebook: string, Twitter: string, Youtube: string, OtherMedia: string, street: string, city: string, County: string, State: string, zip: string, Season1Date: string, Season1Time: string,Season2Date: string, Season2Time: string,Season3Date: string, Season3Time: string,Season4Date: string, Season4Time: string, x: number, y: number, Location: string, Credit: string, WIC: string, WICcash: string, SFMNP: string, SNAP: string, Organic: string, Bakedgoods: string, Cheese: string, Crafts: string, Flowers: string, Eggs: string, Seafood: string, Herbs: string, Vegetables: string,
Honey: string, Jams: string, Maple: string, Meat: string, Nursery: string, Nuts: string, Plants: string, Poultry: string, Prepared: string, Soap: string, Trees: string, Wine: string, Coffee: string, Beans: string, Fruits: string, Grains: string, Juices: string,
Mushrooms: string, PetFood: string, Tofu: string, WildHarvested: string, updateTime: string): typeOfFields {
  return { FMID, MarketName, Website, Facebook, Twitter, Youtube, OtherMedia, street, city, County, State, zip, Season1Date, Season1Time,Season2Date, Season2Time,Season3Date, Season3Time,Season4Date, Season4Time, x, y, Location, Credit, WIC, WICcash, SFMNP, SNAP, Organic, Bakedgoods, Cheese, Crafts, Flowers, Eggs, Seafood, Herbs, Vegetables,
    Honey, Jams, Maple, Meat, Nursery, Nuts, Plants, Poultry, Prepared, Soap, Trees, Wine, Coffee, Beans, Fruits, Grains, Juices,
    Mushrooms, PetFood, Tofu, WildHarvested, updateTime };
}



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);


export default function TableView(props: TableViewProps) {
    const {receivedData} = props;
    let rowArray:Array<typeOfFields> = [];
    let newRowArray:Array<typeOfFields> = [];
    let searchText = '';
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState(rowArray);

    receivedData.forEach((rowData) => {
      let row = createData(rowData.FMID, rowData.MarketName, rowData.Website, rowData.Facebook, rowData.Twitter, rowData.Youtube, rowData.OtherMedia, rowData.street, rowData.city, rowData.County, rowData.State, rowData.zip, rowData.Season1Date, rowData.Season1Time,rowData.Season2Date, rowData.Season2Time,rowData.Season3Date, rowData.Season3Time,rowData.Season4Date, rowData.Season4Time, rowData.x, rowData.y, rowData.Location, rowData.Credit, rowData.WIC, rowData.WICcash, rowData.SFMNP, rowData.SNAP, rowData.Organic, rowData.Bakedgoods, rowData.Cheese, rowData.Crafts, rowData.Flowers, rowData.Eggs, rowData.Seafood, rowData.Herbs, rowData.Vegetables,
      rowData.Honey, rowData.Jams, rowData.Maple, rowData.Meat, rowData.Nursery, rowData.Nuts, rowData.Plants, rowData.Poultry, rowData.Prepared, rowData.Soap, rowData.Trees, rowData.Wine, rowData.Coffee, rowData.Beans, rowData.Fruits, rowData.Grains, rowData.Juices,
      rowData.Mushrooms, rowData.PetFood, rowData.Tofu, rowData.WildHarvested, rowData.updateTime);
      rowArray.push(row);
      newRowArray.push(row);
    })
    

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearchChange = (event,field) => {
      if(event.target.value !== '') {
        let filteredRows = newRowArray.filter((row) => {
          if(row[field] !== null) return((row[field].toString()).toLowerCase()).includes(((event.target.value).toString()).toLowerCase())
        });
        setRows(filteredRows);
      } else {
        setRows(newRowArray)
      }
    }

    return (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </StyledTableCell>
                ))}
                </TableRow>
                <TableRow>{columns.map((column) => (<TableCell  style={{textAlign:'center'}} key={column.id}>{
                    <input type="text" name="search" onChange={(e)=>handleSearchChange(e,column.label)}/>
                }</TableCell>))}</TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.FMID}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
                
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    );
}