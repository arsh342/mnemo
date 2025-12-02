# Mnemo Privacy Policy

**Last Updated: December 1, 2025**

## Our Commitment to Privacy

Mnemo is built with privacy as a fundamental design principle. We believe you should have complete control over your browsing data, and that data should never leave your device without your explicit consent.

## Data Collection and Storage

### What Data Mnemo Collects

Mnemo collects the following information **locally on your device** to provide intelligent tab management:

1. **Tab Metadata**
   - Page titles
   - URLs
   - Domain names
   - Timestamps (when visited, when archived)

2. **Interaction Signals**
   - Time spent on pages (dwell time)
   - Scroll depth
   - Copy/paste events
   - Clicks on links and buttons

3. **Page Content**
   - Text extracts (first ~2KB of visible text for search)
   - Screenshots (optional, can be disabled)
   - Scroll positions

4. **Calculated Data**
   - Importance scores
   - Visit frequency
   - Usage patterns

### Where Data is Stored

**All data is stored locally** in your browser using IndexedDB. Specifically:
- Data never leaves your device
- Data is not transmitted to any server
- No network requests are made to external services
- No analytics or tracking systems are used

## Data Usage

Mnemo uses your data **exclusively** for:
1. Calculating tab importance scores
2. Archiving low-value tabs
3. Providing search and restoration features
4. Contextual suggestions
5. Timeline visualization

## Third-Party Access

**Mnemo does NOT:**
- Share any data with third parties
- Send any data to external servers
- Include any analytics or tracking code
- Use any third-party services or APIs

## Your Control

You have complete control over your data:

### Exclude Domains
You can exclude specific domains from being captured (e.g., banking sites, medical portals, private sites) via the Settings panel.

### Disable Screenshots
You can disable screenshot capture entirely in Settings if you prefer text-only archiving.

### View All Data
All archived data is visible in the Vault and Timeline panels.

### Delete Specific Items
You can delete individual archived tabs at any time.

### Purge All Data
You can permanently delete all Mnemo data with one click using the "Purge All Data" button in Settings.

## Data Retention

- **Active Signals**: Kept for 30 days by default, then automatically deleted
- **Vault Entries**: Kept for 90 days by default (configurable: 30/90/180 days or forever)
- **Settings Data**: Kept until you change or purge them

You can adjust retention periods in Settings.

## Permissions Explained

Mnemo requests the following browser permissions:

- **`tabs`**: To access tab metadata (title, URL) and manage archiving
- **`storage`**: To save data locally in IndexedDB
- **`scripting`**: To inject content scripts for signal capture
- **`activeTab`**: To interact with the active tab for restoration
- **`sidePanel`**: To display the Mnemo UI
- **`<all_urls>`**: To run on all websites for signal capture

**None of these permissions are used to transmit data externally.**

## Open Source

Mnemo is **open source**. You can:
- Review the complete source code on GitHub
- Verify that no network requests are made
- Audit the data storage mechanisms
- Build and run the extension yourself

Repository: [github.com/yourusername/mnemo](https://github.com/yourusername/mnemo)

## Future Features

### Optional Cloud Sync (Not Yet Implemented)

In a future version, we may offer **optional** encrypted cloud sync. If implemented:
- It will be **opt-in only** (disabled by default)
- All data will be **end-to-end encrypted** before leaving your device
- You will control the encryption key
- No one, including us, will be able to read your synced data
- You can enable/disable sync at any time

This feature does not exist in the current version (v0.1).

## Updates to This Policy

We may update this privacy policy to reflect changes in:
- Browser extension features
- Privacy regulations
- User feedback

Changes will be clearly indicated with a new "Last Updated" date. We will never make changes that compromise your privacy without your explicit consent.

## Contact

If you have questions or concerns about privacy:
- Open an issue on GitHub: [github.com/yourusername/mnemo/issues](https://github.com/yourusername/mnemo/issues)
- Email: your-email@example.com

## Your Rights

Depending on your jurisdiction, you may have rights under privacy laws such as GDPR, CCPA, or others. Because Mnemo stores all data locally on your device and makes no network requests, you maintain complete control over your data at all times.

## Summary

**In Plain English:**
- Mnemo captures your browsing activity to manage tabs intelligently
- All data stays on your device, in your browser
- No data is sent to servers or third parties
- You can delete everything at any time
- Screenshots are optional
- You can exclude sensitive domains
- The code is open source for transparency

We built Mnemo to solve a real problem (tab overload) without compromising your privacy. If you have suggestions for how we can improve privacy further, please let us know.
