import EditCell from "../../../components/tables/CandidatesTable/EditCell";
import CellLink from "../../../components/tables/CandidatesTable/CellLink";

function getFullName(params) {
  return `${params.row.attributes.name || ""} ${
    params.row.attributes.surName || ""
  }`;
}

function getEmail(params) {
  return `${params.row.attributes.email || ""}`;
}

function getStatus(params) {
  return `${params.row.attributes.status || ""}`;
}

function getVacancyRate(params) {
  return `${params.row.attributes.vacancyRate || ""}`;
}

export const columns = [
  {
    field: "edit",
    headerName: "",
    width: 70,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);

      return (
        <EditCell
          href={`medarbeider/rediger/${stringedID}`}
          index={params.row.edit}
        />
      );
    },
  },
  {
    field: "id",
    headerName: "Medarbeider ID",
    type: "number",
    width: 130,
    editable: false,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.id}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.id}
        </CellLink>
      );
    },
  },
  {
    field: "name",
    headerName: "Medarbeider",
    width: 250,
    editable: false,
    disableClickEventBubbling: true,
    valueGetter: getFullName,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.attributes.name}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.attributes.name || ""}{" "}
          {params.row.attributes.surName || ""}
        </CellLink>
      );
    },
  },
  {
    field: "email",
    headerName: "Epost",
    width: 250,
    editable: false,
    disableClickEventBubbling: true,
    valueGetter: getEmail,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.attributes.email}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.attributes.email || ""}
        </CellLink>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    editable: false,
    disableClickEventBubbling: true,
    valueGetter: getStatus,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.attributes.status}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.attributes.status || ""}
        </CellLink>
      );
    },
  },
  {
    field: "vacancyRate",
    headerName: "Stillingsprosent",
    type: "number",
    width: 160,
    editable: false,
    disableClickEventBubbling: true,
    valueGetter: getVacancyRate,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.attributes.vacancyRate}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.attributes.vacancyRate || ""} %
        </CellLink>
      );
    },
  },
];

export const columnsMobile = [
  {
    field: "edit",
    headerName: "",
    width: 40,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <EditCell
          href={`medarbeider/profil/${stringedID}`}
          index={params.row.edit}
        />
      );
    },
  },
  {
    field: "name",
    headerName: "Medarbeider",
    width: 170,
    editable: false,
    disableClickEventBubbling: true,
    valueGetter: getFullName,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.attributes.name}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.attributes.name || ""}{" "}
          {params.row.attributes.surName || ""}
        </CellLink>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    editable: false,
    disableClickEventBubbling: true,
    valueGetter: getStatus,
    renderCell: (params) => {
      let stringedID = JSON.stringify(params.id);
      return (
        <CellLink
          index={params.row.attributes.status}
          href={`medarbeider/profil/${stringedID}`}
        >
          {params.row.attributes.status || ""}
        </CellLink>
      );
    },
  },
];
