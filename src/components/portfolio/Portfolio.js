import React from 'react';
// import PortfolioBlock from './PortfolioBlock';
// import { Box, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import { info } from '../../info/Info';
import '../../styles.css';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 1000,
		height: 1000,
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	custom: {
		color: '#000',
	},
}));

export default function Portfolio() {
	const classes = useStyles();
	return (
		<div>
			<Typography variant='h2' align='center' className={classes.custom}>
				Projects
			</Typography>
			<div className={classes.root}>
				<GridList cellHeight={400} spacing={20} className={classes.gridList}>
					<GridListTile key='Subheader' cols={4} style={{ height: 'auto' }}>
						<ListSubheader component='div'></ListSubheader>
					</GridListTile>
					{info.portfolio.map((project, index) => (
						<GridListTile key={project.img}>
							<img src={project.image} alt={project.title} />
							<GridListTileBar
								title={project.title}
								actionIcon={
									<IconButton
										aria-label={`info about ${project.title}`}
										className={classes.icon}
										href={project.source}
									>
										<CodeIcon />
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
}
