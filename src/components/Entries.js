import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

function sortTableData(entries) {
  return Object.keys(entries).map(entryId => {
    return {
      entryId: entryId,
      title: entries[entryId].fields.title,
      summary: entries[entryId].fields.summary,
      createdBy: entries[entryId].sys.createdBy,
      updatedBy: entries[entryId].sys.updatedBy,
      updatedAt: entries[entryId].sys.updatedAt
    };
  });
}

function Entries ({ entries }) {

  let tableData = sortTableData(entries);

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Title
          </Table.HeaderCell>
          <Table.HeaderCell>
            Summary
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
        {tableData.map(({ entryId, title, summary, createdBy, updatedBy, updatedAt }) => (
          <Table.Row key={entryId}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{summary}</Table.Cell>
            <Table.Cell>{createdBy}</Table.Cell>
            <Table.Cell>{updatedBy}</Table.Cell>
            <Table.Cell>{updatedAt}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
Entries.propTypes = {
  entries: PropTypes.object.isRequired
};

export default Entries;
