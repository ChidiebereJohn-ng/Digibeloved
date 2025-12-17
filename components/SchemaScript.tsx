import React from 'react';

interface SchemaScriptProps {
  schema: Record<string, any>;
}

const SchemaScript: React.FC<SchemaScriptProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaScript;