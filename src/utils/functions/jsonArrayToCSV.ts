function escapeCsvValue(value: string) {
  if (value === null || value === undefined) {
    return "";
  }

  const stringValue = String(value);

  // If the value contains comma, newline, or quote, wrap in quotes and escape quotes
  if (
    stringValue.includes(",") ||
    stringValue.includes("\n") ||
    stringValue.includes('"')
  ) {
    return '"' + stringValue.replace(/"/g, '""') + '"';
  }

  return stringValue;
}

// Function to flatten nested objects using dot notation
function flattenObject(obj: any, prefix = "") {
  const flattened: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (value === null || value === undefined) {
        flattened[newKey] = value;
      } else if (Array.isArray(value)) {
        // Handle arrays by converting to JSON string or flattening if objects
        if (value.length === 0) {
          flattened[newKey] = "[]";
        } else if (typeof value[0] === "object" && value[0] !== null) {
          // If array contains objects, flatten each with index
          value.forEach((item, index) => {
            if (typeof item === "object" && item !== null) {
              const arrayFlattened = flattenObject(item, `${newKey}[${index}]`);
              Object.assign(flattened, arrayFlattened);
            } else {
              flattened[`${newKey}[${index}]`] = item;
            }
          });
        } else {
          // If array contains primitives, join them or keep as JSON
          flattened[newKey] = JSON.stringify(value);
        }
      } else if (typeof value === "object") {
        // Recursively flatten nested objects
        const nestedFlattened = flattenObject(value, newKey);
        Object.assign(flattened, nestedFlattened);
      } else {
        flattened[newKey] = value;
      }
    }
  }

  return flattened;
}

function arrayToCSV(jsonArrayString: string) {
  // Parse each line as JSON
  const objects: Array<any> = JSON.parse(jsonArrayString)

  if(!Array.isArray(objects)){
    throw "Input must be a JSON array"
  }

  // Flatten all objects
  const flattenedObjects = objects.map((obj) => flattenObject(obj));

  // Get all unique keys from all flattened objects to create headers
  const allKeys: Set<string> = new Set();
  flattenedObjects.forEach((obj) => {
    Object.keys(obj).forEach((key) => allKeys.add(key));
  });

  const headers = Array.from(allKeys).sort(); // Sort for consistent column order

  // Create CSV content
  const csvLines = [];

  // Add header row
  csvLines.push(headers.map((header) => escapeCsvValue(header)).join(","));

  // Add data rows
  flattenedObjects.forEach((obj) => {
    const row = headers.map((header) => escapeCsvValue(obj[header]));
    csvLines.push(row.join(","));
  });

  return {
    output: csvLines.join("\n")
  };
}

export default arrayToCSV;
