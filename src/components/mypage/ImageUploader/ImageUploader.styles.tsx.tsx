import styled from "@emotion/styled";

export const ImageUploadWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImageInput = styled.input`
  visibility: hidden;
  position: absolute;
`;

export const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 3px dashed gray;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: 900;
  font-size: 2rem;
`;

export const ThumbnailTitle = styled.div`
  position: absolute;
  padding: 0.5rem;
  background-color: black;
  text-align: center;
  width: 100%;
  bottom: 0;
  color: var(--main-color);
`;
