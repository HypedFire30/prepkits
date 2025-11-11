# PDF Upload Guide

## Best Way to Upload Practice Tests and Roleplay PDFs

### Recommended File Structure

```
public/
  business-administration/
    cheat-sheet.pdf
    roleplays/
      HRM/
        roleplay-1.pdf
        roleplay-2.pdf
        roleplay-3.pdf
        roleplay-4.pdf
        roleplay-5.pdf
      BLTDM/
        roleplay-1.pdf
        roleplay-2.pdf
        roleplay-3.pdf
        roleplay-4.pdf
        roleplay-5.pdf
    tests/
      test-1.pdf
      test-2.pdf
      test-3.pdf
      test-4.pdf
      test-5.pdf
  entrepreneurship/
    cheat-sheet.pdf
    roleplays/
      ENT/
        roleplay-1.pdf
        roleplay-2.pdf
        roleplay-3.pdf
        roleplay-4.pdf
        roleplay-5.pdf
      ETDM/
        roleplay-1.pdf
        roleplay-2.pdf
        roleplay-3.pdf
        roleplay-4.pdf
        roleplay-5.pdf
    tests/
      test-1.pdf
      ...
  finance/
    roleplays/
      ACT/
        roleplay-1.pdf
        ...
      BFS/
        roleplay-1.pdf
        ...
      FTDM/
        roleplay-1.pdf
        ...
  hospitality-tourism/
    roleplays/
      HLM/
        roleplay-1.pdf
        ...
      HTDM/
        roleplay-1.pdf
        ...
      QSRM/
        roleplay-1.pdf
        ...
      RFSM/
        roleplay-1.pdf
        ...
      TTDM/
        roleplay-1.pdf
        ...
  marketing/
    roleplays/
      AAM/
        roleplay-1.pdf
        ...
      ASM/
        roleplay-1.pdf
        ...
      BSM/
        roleplay-1.pdf
        ...
      BTDM/
        roleplay-1.pdf
        ...
      FMS/
        roleplay-1.pdf
        ...
      MCS/
        roleplay-1.pdf
        ...
      MTDM/
        roleplay-1.pdf
        ...
      RMS/
        roleplay-1.pdf
        ...
      SEM/
        roleplay-1.pdf
        ...
      STDM/
        roleplay-1.pdf
        ...
```

### Upload Process

1. **For Roleplays:**

   - Upload PDFs to: `public/[cluster-name]/roleplays/[event-code]/roleplay-1.pdf`
   - Files will automatically be accessible at: `/[cluster-name]/roleplay/[event-code]/[number]`
   - Example: `public/entrepreneurship/roleplays/ENT/roleplay-1.pdf`
   - URL: `/entrepreneurship/roleplay/ENT/1`
   - **Event Codes:**
     - Business Administration: `HRM`, `BLTDM`
     - Entrepreneurship: `ENT`, `ETDM`
     - Finance: `ACT`, `BFS`, `FTDM`
     - Hospitality & Tourism: `HLM`, `HTDM`, `QSRM`, `RFSM`, `TTDM`
     - Marketing: `AAM`, `ASM`, `BSM`, `BTDM`, `FMS`, `MCS`, `MTDM`, `RMS`, `SEM`, `STDM`

2. **For Practice Tests:**

   - **Option A (PDFs - Simple):**

     - Upload PDFs to: `public/[cluster-name]/tests/test-1.pdf`
     - Files will open as PDFs (not interactive)
     - URL: `/[cluster-name]/test/1`

   - **Option B (Interactive - Recommended):**
     - Extract questions from PDFs
     - Create data file: `data/tests.ts`
     - Tests become interactive with scoring
     - See `IMPLEMENTATION_NOTES.md` for details

3. **For Cheat Sheets:**
   - Upload to: `public/[cluster-name]/cheat-sheet.pdf`
   - Automatically linked in sidebar
   - URL: `/[cluster-name]/cheat-sheet.pdf`

### File Naming Convention

- **Roleplays:** `roleplay-1.pdf`, `roleplay-2.pdf`, etc.
- **Tests:** `test-1.pdf`, `test-2.pdf`, etc.
- **Cheat Sheets:** `cheat-sheet.pdf` (exact name required)

### Cluster Folder Names

Use these exact folder names (matching cluster IDs):

- `business-administration`
- `entrepreneurship`
- `finance`
- `hospitality-tourism`
- `marketing`

### Notes

- PDFs are served directly from the `public` folder
- No database needed - just upload files
- Files are accessible immediately after upload
- Both PDFs and HTML files are supported (PDFs preferred)
