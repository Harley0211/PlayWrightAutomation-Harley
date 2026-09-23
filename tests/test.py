import requests
from bs4 import BeautifulSoup


def decode_secret_message(url):
    # Get the published Google Doc
    response = requests.get(url)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    # Find the table containing the character coordinates
    table = soup.find("table")

    if table is None:
        raise ValueError("Could not find the data table in the document.")

    rows = table.find_all("tr")

    data = []

    # Read the table rows
    for row in rows[1:]:  # Skip the header row
        cells = row.find_all(["td", "th"])

        if len(cells) < 3:
            continue

        character = cells[0].get_text(strip=True)
        x = int(cells[1].get_text(strip=True))
        y = int(cells[2].get_text(strip=True))

        data.append((x, y, character))

    if not data:
        raise ValueError("No character data found.")

    # Find the size of the grid
    max_x = max(x for x, y, character in data)
    max_y = max(y for x, y, character in data)

    # Create an empty grid filled with spaces
    grid = [
        [" " for _ in range(max_x + 1)]
        for _ in range(max_y + 1)
    ]

    # Put each character in its correct position
    for x, y, character in data:
        grid[y][x] = character

    # Print the completed grid
    for row in grid:
        print("".join(row))