

export function Cell({value, handleCellChange, type}) {

    const colors = [
        "#343a40", // Dark Grey
        "#cce5ff", // Light Blue
        "#28a745", // Green
        "#6f42c1", // Purple
        "#f8d7da"  // Light Red / original
      ];

    let color = "";
    if (type === "Doctor") {
        color = colors[4]

    } else if (type === "NPT") {
        color = colors[1]
    } else if (type === "Patient") {
        color = colors[0]
    } else {
        color = colors[3]
    }

    return (
        <td
        onClick = {handleCellChange}
        style = {{
            cursor: "pointer",
            textAlign: "center",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: value === 0 ? "#FFFFFF" : color,
        }}>
            {value}
        </td>
    );
}