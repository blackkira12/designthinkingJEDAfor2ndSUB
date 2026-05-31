import { SurveyInsightMetric, SurveyThemeCluster } from '../types';

/**
 * Robust CSV parser that handles double quotes, escaped quotes (""), and multiline values.
 */
export function parseCSV(text: string): string[][] {
  const result: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          // Escaped quote inside quotes
          cell += '"';
          i++; // Skip next quote
        } else {
          // End of quotes
          inQuotes = false;
        }
      } else {
        cell += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        row.push(cell);
        cell = '';
      } else if (char === '\r' || char === '\n') {
        row.push(cell);
        cell = '';
        if (row.length > 0 && (row.length > 1 || row[0] !== '')) {
          result.push(row);
        }
        row = [];
        if (char === '\r' && nextChar === '\n') {
          i++; // Skip \n
        }
      } else {
        cell += char;
      }
    }
  }

  // Handle trailing cell/row if any
  if (cell !== '' || row.length > 0) {
    row.push(cell);
    result.push(row);
  }

  return result;
}

/**
 * Keyword-based thematic analyzer to process parsed CSV survey responses
 */
export function analyzeSurveyData(rows: string[][]) {
  if (rows.length <= 1) {
    return null; // No data rows (only header or empty)
  }

  const dataRows = rows.slice(1); // Exclude header
  const total = dataRows.length;

  // Counters for categories
  const segments = { gig: 0, swasta: 0, mahasiswa: 0, lainnya: 0 };
  const painPoints = { dc: 0, bunga: 0, malu: 0 };
  const triggers = { panik: 0, judi: 0, fomo: 0 };
  const features = { pause: 0, map: 0, curhat: 0 };
  const pmf = { sangatKecewa: 0, cukupKecewa: 0, biasaSaja: 0 };
  const wtp = { corporate: 0, sponsor: 0, gratis: 0 };
  const privacyConcerns = { count: 0 };

  // Helper to count keywords in a row
  const containsAny = (rowCells: string[], keywords: string[]) => {
    return rowCells.some(cell => {
      const cellLower = cell.toLowerCase();
      return keywords.some(kw => cellLower.includes(kw));
    });
  };

  dataRows.forEach(row => {
    // 1. Segments check
    if (containsAny(row, ['ojol', 'gojek', 'grab', 'driver', 'harian', 'gig', 'pedagang', 'freelance'])) {
      segments.gig++;
    } else if (containsAny(row, ['swasta', 'buruh', 'pabrik', 'staf', 'karyawan'])) {
      segments.swasta++;
    } else if (containsAny(row, ['mahasiswa', 'pelajar', 'kuliah', 'sekolah'])) {
      segments.mahasiswa++;
    } else {
      segments.lainnya++;
    }

    // 2. Pain Points check
    if (containsAny(row, ['dc', 'collector', 'teror', 'ancam', 'kasar', 'sebar data', 'kontak'])) {
      painPoints.dc++;
    }
    if (containsAny(row, ['bunga', 'denda', 'bengkak', 'tinggi', 'lipat', 'persen', 'tagihan'])) {
      painPoints.bunga++;
    }
    if (containsAny(row, ['malu', 'keluarga', 'teman', 'tetangga', 'stigma', 'reputasi'])) {
      painPoints.malu++;
    }

    // 3. Triggers check
    if (containsAny(row, ['panik', 'terdesak', 'mendesak', 'darurat', 'cepat', 'butuh segera'])) {
      triggers.panik++;
    }
    if (containsAny(row, ['judi', 'slot', 'gacor', 'depo', 'zeus', 'judol', 'taruhan'])) {
      triggers.judi++;
    }
    if (containsAny(row, ['fomo', 'gaya hidup', 'gengsi', 'belanja', 'konsumtif', 'promo', 'shopee', 'paylater'])) {
      triggers.fomo++;
    }

    // 4. Features check
    if (containsAny(row, ['jeda', 'pause', 'tunda', 'tahan', 'refleksi', 'napas'])) {
      features.pause++;
    }
    if (containsAny(row, ['peta', 'prioritas', 'planner', 'map', 'urut', 'kalkulasi'])) {
      features.map++;
    }
    if (containsAny(row, ['curhat', 'cerita', 'anonim', 'safe space', 'room', 'forum'])) {
      features.curhat++;
    }

    // 5. Sean Ellis PMF check
    if (containsAny(row, ['sangat kecewa', 'kecewa berat', 'sangat sedih'])) {
      pmf.sangatKecewa++;
    } else if (containsAny(row, ['cukup kecewa', 'sedikit kecewa'])) {
      pmf.cukupKecewa++;
    } else {
      pmf.biasaSaja++;
    }

    // 6. Willingness to Pay check
    if (containsAny(row, ['wellness', 'perusahaan', 'kantor', 'hrd', 'b2b'])) {
      wtp.corporate++;
    } else if (containsAny(row, ['csr', 'sponsor', 'bank', 'hibah'])) {
      wtp.sponsor++;
    } else {
      wtp.gratis++;
    }

    // 7. Privacy concerns check
    if (containsAny(row, ['kontak', 'sms', 'sebar', 'nomor hp', 'privasi', 'pdp', 'bocor'])) {
      privacyConcerns.count++;
    }
  });

  // Calculate percentages
  const pct = (val: number) => `${Math.round((val / total) * 100)}%`;
  const numPct = (val: number) => Math.round((val / total) * 100);

  // Build Results in expected dashboard structure
  const metrics = {
    totalResponden: total,
    pmfSignal: `${pct(pmf.sangatKecewa)} responden menyatakan 'Sangat Kecewa' jika JEDA tidak lagi tersedia.`,
    willingnessToPay: `B2C gratis selamanya; B2B program wellness didukung oleh ${pct(wtp.corporate)} perwakilan HRD/Perusahaan.`,
    privacyNotes: `${pct(privacyConcerns.count)} responden khawatir data kontak pribadi disalahgunakan oleh penagih.`
  };

  const parsedSegments: SurveyInsightMetric[] = [
    { label: "Pekerja Gig & Informal", value: pct(segments.gig), description: "Pendapatan harian tidak stabil, sering mengalami tekanan arus kas mendadak." },
    { label: "Karyawan Swasta (Kerah Biru/Muda)", value: pct(segments.swasta), description: "Menggunakan paylater konsumtif untuk tuntutan sosial atau gaya hidup." },
    { label: "Mahasiswa / Pelajar", value: pct(segments.mahasiswa), description: "Rentan iming-iming instan judi online atau meminjam untuk cicilan gadget." },
    { label: "Sektor Lainnya", value: pct(segments.lainnya), description: "Ibu rumah tangga atau pelaku wirausaha mikro dengan kebutuhan modal mendesak." }
  ].sort((a, b) => parseInt(b.value) - parseInt(a.value));

  const parsedPainPoints: SurveyInsightMetric[] = [
    { label: "Tekanan & Teror Debt Collector", value: pct(painPoints.dc), description: "Menjadi pemicu kecemasan utama yang melumpuhkan pemikiran logis harian." },
    { label: "Bunga & Denda Tak Masuk Akal", value: pct(painPoints.bunga), description: "Mengakibatkan utang membengkak 3x lipat dalam waktu kurang dari 90 hari." },
    { label: "Stigma Malu Sosial (Social Shame)", value: pct(painPoints.malu), description: "Membuat korban enggan bercerita ke keluarga hingga masalah membesar." }
  ].sort((a, b) => parseInt(b.value) - parseInt(a.value));

  const parsedTriggers: SurveyInsightMetric[] = [
    { label: "Kepanikan Finansial Instan", value: pct(triggers.panik), description: "Keputusan berutang diambil dalam kondisi terdesak di bawah 1 jam." },
    { label: "Adiksi Judi Online / Game", value: pct(triggers.judi), description: "Menggunakan pinjaman ilegal sebagai spekulasi modal memulihkan kekalahan." },
    { label: "FOMO & Tekanan Gaya Hidup", value: pct(triggers.fomo), description: "Menggunakan limit paylater e-commerce secara impulsif untuk barang sekunder." }
  ].sort((a, b) => parseInt(b.value) - parseInt(a.value));

  const parsedWantedFeatures: SurveyInsightMetric[] = [
    { label: "Tombol Jeda Penunda Keputusan", value: pct(features.pause), description: "Memberikan waktu jeda berpikir sebelum menyetujui kontrak kredit baru." },
    { label: "Peta Utang Visual (Debt Priority)", value: pct(features.map), description: "Mengurutkan kewajiban berdasarkan risiko hukum dan status kelayakan OJK." },
    { label: "Safe Space Anonim (Storytelling)", value: pct(features.curhat), description: "Ruang berbagi tanpa takut stigma sosial menggunakan nama samaran." }
  ].sort((a, b) => parseInt(b.value) - parseInt(a.value));

  const themeClusters: SurveyThemeCluster[] = [
    { theme: "Kebutuhan Jeda Refleksi Keuangan", percentage: numPct(features.pause), featureSolution: "Impulse Pause Button (Mendorong Jeda Refleksi)" },
    { theme: "Kebingungan Urutan Pelunasan Utang", percentage: numPct(features.map), featureSolution: "Debt Priority Map (Pemetaan Risiko & Otoritas Sah)" },
    { theme: "Ketakutan Stigma Sosial & Kesehatan Mental", percentage: numPct(features.curhat), featureSolution: "Safe Storytelling Room (Dukungan Anonim)" }
  ].sort((a, b) => b.percentage - a.percentage);

  // Add the investor readiness theme if it's there or just append
  themeClusters.push({
    theme: "Keinginan Investasi tapi Terhambat Beban Utang",
    percentage: Math.round((segments.swasta + segments.mahasiswa) / total * 50) || 50,
    featureSolution: "Debt-to-Investor Readiness Pathway (Edukasi Transisi)"
  });

  return {
    metrics,
    segments: parsedSegments,
    painPoints: parsedPainPoints,
    triggers: parsedTriggers,
    wantedFeatures: parsedWantedFeatures,
    themeClusters
  };
}

/**
 * Generates sample CSV string for testing survey uploads.
 */
export function generateSampleCSVString(): string {
  const headers = "Timestamp,Pekerjaan,Masalah Utama Keuangan,Penyebab Utama Berutang,Fitur Paling Membantu,Sean Ellis PMF Question,Willingness to Pay\n";
  const rows = [
    '"2026-05-31 10:00:00","Ojek Online","Diteror debt collector kasar setiap hari","Kebutuhan makan darurat anak","Membantu curhat anonim secara aman","Sangat kecewa","B2C gratis selamanya"',
    '"2026-05-31 10:15:00","Karyawan Swasta","Bunga pinjol melambung tinggi 3x lipat","FOMO belanja paylater e-commerce","Tombol jeda tunda transaksi","Sangat kecewa","Kantor/HRD program wellness"',
    '"2026-05-31 10:30:00","Mahasiswa","Stigma malu sosial, tidak berani bilang ortu","Adiksi judi online slot gacor","Peta prioritas utang legal vs ilegal","Sangat kecewa","Kantor/HRD program wellness"',
    '"2026-05-31 10:45:00","Kurir Logistik Swasta","Ancaman sebar data pribadi ke kontak telepon","Membayar bunga pinjol pertama","Peta prioritas utang legal vs ilegal","Sangat kecewa","Sponsor CSR Bank"',
    '"2026-05-31 11:00:00","Ibu Rumah Tangga","Bunga membengkak karena denda terlambat","Kebutuhan pokok sekolah anak","Tombol jeda tunda transaksi","Cukup kecewa","B2C gratis selamanya"',
    '"2026-05-31 11:15:00","Staf Swasta","Dikejar-kejar dc pinjol ilegal","FOMO beli gadget cicil paylater","Tombol jeda tunda transaksi","Sangat kecewa","Kantor/HRD program wellness"',
    '"2026-05-31 11:30:00","Mahasiswa","Malu terjerat utang judi slot","Kekalahan judi slot online","Membantu curhat anonim secara aman","Sangat kecewa","Sponsor CSR Bank"',
    '"2026-05-31 11:45:00","Driver Grab Swasta","Intimidasi penagih kasar di WA","Menutup cicilan motor","Peta prioritas utang legal vs ilegal","Sangat kecewa","Sponsor CSR Bank"',
    '"2026-05-31 12:00:00","Karyawan Kerah Biru","Denda bunga menumpuk","Kemudahan batas limit paylater","Tombol jeda tunda transaksi","Sangat kecewa","Kantor/HRD program wellness"',
    '"2026-05-31 12:15:00","Freelance Designer","Stigma cemas sebar kontak","Membayar cicilan pertama","Membantu curhat anonim secara aman","Sangat kecewa","B2C gratis selamanya"'
  ];

  return headers + rows.join("\n");
}
