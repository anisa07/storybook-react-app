import {ColumnModel} from "../../shared/types";
import {ComponentHeader} from "../componentHeader/ComponentHeader";
import {Cards} from "../cards/Cards";
import {connect} from "react-redux";
import {changeColumn, RootState} from "../../lib/redux";
import {makeStyles} from "@material-ui/core/styles";
import {DragDropContext, DragUpdate} from "react-beautiful-dnd";
import {useCommonStyles} from "../../shared/style";

interface ColumnProps {
    index: number,
    column: ColumnModel,
    onUpdateColumn: (copyColumn: ColumnModel) => void;
    onDeleteColumn: (id: string) => void;
}

const useStyles = makeStyles({
    column: {
        width: '300px',
        marginRight: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '550px',
        minWidth: '250px'
    },
});

export const Column = (props: ColumnProps) => {
    const {column, onUpdateColumn, onDeleteColumn} = props;
    const classes = useStyles();
    const commonStyles = useCommonStyles();

    const handleDeleteColumn = () => {
        onDeleteColumn(column.id);
    }

    const handleUpdateColumnName = (name: string) => {
        const copyColumn = {...column, name};
        onUpdateColumn(copyColumn);
    }

    return (
        <div className={`${classes.column} ${commonStyles.border}`}>
            <ComponentHeader
                name={column.name}
                label="Column Name"
                buttonLabel="Delete Column"
                onDeleteComponent={handleDeleteColumn}
                onUpdateComponentName={handleUpdateColumnName}
            />
            <div>
                <Cards
                    column={column}
                    onUpdateColumn={onUpdateColumn}
                />
            </div>
        </div>
    )
}

const ColumnWithDraggableContext = (props: ColumnProps) => {
    const {column, onUpdateColumn, onDeleteColumn} = props;

    const handleDrop = (e: DragUpdate) => {
        const {destination, source} = e;
        const columnCopy = {...column}
        if (destination?.droppableId === column.id && source?.droppableId === column.id) {
            const destIndex = destination.index;
            const sourceIndex = source.index;
            columnCopy.cards.splice(destIndex, 0, columnCopy.cards[sourceIndex]);
            columnCopy.cards.splice(destIndex < sourceIndex ? sourceIndex + 1 : sourceIndex, 1);
        }
        onUpdateColumn(columnCopy);
    }

    const handleDeleteColumn = (columnId: string) => {
        onDeleteColumn(columnId);
    }

    return (
        <div>
            <DragDropContext
                onDragEnd={handleDrop}
            >
                <Column
                    column={column}
                    index={0}
                    onUpdateColumn={onUpdateColumn}
                    onDeleteColumn={handleDeleteColumn}
                />
            </DragDropContext>
        </div>
    )
}

export default connect(
    ({column}: RootState) => ({
        column
    }),
    dispatch => ({
        onUpdateColumn: (value: ColumnModel) => dispatch(changeColumn(value)),
    })
)(ColumnWithDraggableContext);
