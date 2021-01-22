import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

function sortTableData(assets) {
  return Object.keys(assets).map(assetId => {
    return {
      assetId: assetId,
      title: assets[assetId].fields.title,
      contentType: assets[assetId].fields.contentType,
      fileName: assets[assetId].fields.fileName,
      createdBy: assets[assetId].sys.createdBy,
      updatedBy: assets[assetId].sys.updatedBy,
      updatedAt: assets[assetId].sys.updatedAt
    };
  });
}

function Assets ({ assets }) {
  let tableData = sortTableData(assets);

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Title
          </Table.HeaderCell>
          <Table.HeaderCell>
            Content Type
          </Table.HeaderCell>
          <Table.HeaderCell>
            File Name
          </Table.HeaderCell>
          <Table.HeaderCell>
            Created By
          </Table.HeaderCell>
          <Table.HeaderCell>
            Updated By
          </Table.HeaderCell>
          <Table.HeaderCell>
            Last Updated
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableData.map(({ assetId, title, contentType, fileName, createdBy, updatedBy, updatedAt }) => (
          <Table.Row key={assetId}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{contentType}</Table.Cell>
            <Table.Cell>{fileName}</Table.Cell>
            <Table.Cell>{createdBy}</Table.Cell>
            <Table.Cell>{updatedBy}</Table.Cell>
            <Table.Cell>{updatedAt}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
Assets.propTypes = {
  assets: PropTypes.object.isRequired
};

export default Assets;
