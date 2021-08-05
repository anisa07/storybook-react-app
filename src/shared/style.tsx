import {makeStyles} from "@material-ui/core/styles";

export const useCommonStyles = makeStyles({
    border: {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(to top left, #59575811, #c2bcbc99)`,
        boxShadow: '3px 3px 5px #c2bcbc44',
    }
});
