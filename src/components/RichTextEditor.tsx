import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Box, ButtonGroup, IconButton } from '@chakra-ui/react';
import { BiBold, BiItalic, BiUnderline } from 'react-icons/bi';
import 'draft-js/dist/Draft.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
      <ButtonGroup spacing={2} mb={2}>
        <IconButton
          aria-label="Bold"
          icon={<BiBold />}
          onClick={() => toggleInlineStyle('BOLD')}
        />
        <IconButton
          aria-label="Italic"
          icon={<BiItalic />}
          onClick={() => toggleInlineStyle('ITALIC')}
        />
        <IconButton
          aria-label="Underline"
          icon={<BiUnderline />}
          onClick={() => toggleInlineStyle('UNDERLINE')}
        />
      </ButtonGroup>
      <Box border="1px" borderColor="gray.100" p={2}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
