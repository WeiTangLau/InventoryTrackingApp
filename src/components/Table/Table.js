import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ItemImage from "../ItemImage/ItemImage";
import PopupDescription from "../PopupDescription/PopupDescription";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      expanded: {},
      subExpanded: {}
    };
  }

  getUniqueBrandsAndCategories = items => {
    let arr = [];

    items.forEach(item => {
      arr.push({
        brand: item.brand,
        category: item.category
      });
    });

    let result = arr.reduce((unique, o) => {
      if (
        !unique.some(obj => {
          return (
            obj.brand.brandName === o.brand.brandName &&
            obj.category.categoryName === o.category.categoryName
          );
        })
      ) {
        unique.push(o);
      }
      return unique;
    }, []);

    return result;
  };

  getFilteredData = original => {
    let result = [];

    this.props.items.forEach(item => {
      if (
        original.brand.brandName === item.brand.brandName &&
        original.category.categoryName === item.category.categoryName
      ) {
        result.push(item);
      }
    });

    return result;
  };

  onExpandedChange = e => {
    this.setState({ modalShow: true });
  };

  onHide = e => {
    this.setState({ modalShow: false });
  };

  columns = [
    {
      Header: "Brand",
      id: "brand",
      accessor: b => b.brand.brandName,
      Filter: ({ filter, onChange }) => (
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: "100%" }}
          value={filter ? filter.value : "all"}
        >
          <option value="">Show all Brands</option>
          {this.props.brands.map(item => (
            <option>{item.brandName}</option>
          ))}
        </select>
      )
    },
    {
      Header: "Category",
      id: "category",
      accessor: c => c.category.categoryName,
      Filter: ({ filter, onChange }) => (
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: "100%" }}
          value={filter ? filter.value : "all"}
        >
          <option value="">Show all Categories</option>
          {this.props.categories.map(item => (
            <option>{item.categoryName}</option>
          ))}
        </select>
      )
    }
  ];

  filteredColumns = [
    {
      Header: "ID",
      accessor: "commonItemId",
      style: {
        textAlign: "center"
      },
      width: 30,
      maxWidth: 50,
      minWidth: 50
    },
    {
      Header: "Name",
      accessor: "name",
      style: {
        textAlign: "center"
      }
    },

    {
      Header: "Total Quantity",
      accessor: "totalInventoryQty",
      style: {
        textAlign: "center"
      },
      width: 110,
      maxWidth: 200,
      minWidth: 150
    }
  ];

  render() {
    let uniqueBrandsAndCategories = this.getUniqueBrandsAndCategories(
      this.props.items
    );

    return (
      <ReactTable
        className="-striped -highlight flex flex-wrap justify-center ma3 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center"
        noDataText={"There is no item"}
        style={{ textAlign: "center" }}
        data={uniqueBrandsAndCategories}
        columns={this.columns}
        expanded={this.state.expanded}
        defaultPageSize={10}
        onExpandedChange={expanded => {
          this.setState({ modalShow: true });
          this.setState({ expanded });
        }}
        minRows={10}
        filterable
        SubComponent={row => {
          let filteredData = this.getFilteredData(row.original);
          return (
            <ReactTable
              data={filteredData}
              columns={this.filteredColumns}
              defaultPageSize={filteredData.length}
              showPagination={filteredData.length > 5}
              SubComponent={row => {
                return (
                  <div>
                    <PopupDescription
                      onHide={this.onHide}
                      show={this.state.modalShow}
                      row={row}
                    />
                    <div>
                      <div className="flex items-center ma3">
                        <ItemImage image={row.original.image} alt="Item" />
                      </div>
                      <div className="b--solid ba pa2 ma2">
                        <span className="tj ma3">
                          {row.original.description.description}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          );
        }}
      />
    );
  }
}

export default Table;

/*
<div>
                    <div className="flex items-center ma3">
                      <ItemImage image={row.original.image} alt="Item" />
                    </div>
                    <div className="b--solid ba pa2 ma2">
                      <span className="tj ma3">
                        {row.original.description.description}
                      </span>
                    </div>
                  </div>

<PopupDescription
                        description={row.original.description.description}
                      />
          
*/
