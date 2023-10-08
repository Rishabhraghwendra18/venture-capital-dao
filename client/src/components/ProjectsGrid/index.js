import {
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

function ProjectsGrid({ image, title, description }) {
  return (
    <Card
      sx={{
        flex: 1,
        borderRadius: "1.5rem",
        minHeight: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "0.625rem 1.25rem",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title="project" />
      <CardContent 
        sx={{
            display:'flex',
            flexDirection:'column',
            gap:'1rem'
        }} 
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, textAlign: "center", color: "#2B2D42" }}
        >
          {title}
        </Typography>
        <Typography variant="p" sx={{ textAlign: "center", color: "#2B2D42" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{marginTop:'auto'}}>
        <Button variant="contained" sx={{ flex: 1 }}>
          Vote Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectsGrid;
