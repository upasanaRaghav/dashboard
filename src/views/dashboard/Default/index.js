import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import PremiumStats from './premium';
import { gridSpacing } from 'store/constant';
import Revenue from './revenue';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
       
          <Grid item xs={12}>
            <PremiumStats />
          </Grid>

          <Grid item lg={4} md={6} sm={6} xs={12} style={{ display: 'flex', gap: '20px' }}> {/* Decreased the gap */}
  <Revenue title="Revenue" value="$56,945" change="+45%" positive={true} style={{ flex: '20' }} /> {/* Increased flex value */}
  <Revenue title="User" value="76.8%" change="-1.7%" positive={false} style={{ flex: '20' }} /> {/* Increased flex value */}
  <Revenue title="New Signups" value="116" change="0.00%" style={{ flex: '20' }} /> {/* Increased flex value */}
  <Revenue title="Retention" value="12.67%" change="+0.6%" positive={true} style={{ flex: '20' }} /> {/* Increased flex value */}
</Grid>


          
          <Grid item lg={4} md={12} sm={12} xs={12}>
            {/* Grid for search tab */}
          </Grid>
       
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <TotalGrowthBarChart isLoading={isLoading} />
      </Grid>
      <Grid item xs={12} md={4}>
        {/* Your component */}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
