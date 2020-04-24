import React, { FC } from 'react';
import { Flex, Text, Grid, Button } from '@fluentui/react-northstar';
import { useDispatch } from 'react-redux';

import ImageLink from '../ImageLink';
import { deleteCamera } from '../../store/camera/cameraActions';

interface CameraDetailInfoProps {
  name: string;
  rtsp: string;
  modelName: string;
  id: number;
}
const CameraDetailInfo: FC<CameraDetailInfoProps> = ({ id, name, rtsp, modelName }) => {
  const dispatch = useDispatch();

  return (
    <Flex styles={{ padding: '1rem 2rem' }} column space="between">
      <Grid columns="2" styles={{ gap: '3rem' }}>
        <Text size="larger" weight="semibold">
          Details
        </Text>
        <ImageLink defaultSrc="/defaultCamera.png" width="100px" height="100px" />
        <Flex column gap="gap.small">
          <Text size="large" content={'Name:'} />
          <Text size="large" content={'RTSP Url:'} />
          <Text size="large" content={'Model:'} />
        </Flex>
        <Flex column gap="gap.medium">
          <Text size="large" content={name} />
          <Text size="large" content={rtsp} />
          <Text size="large" content={modelName} />
        </Flex>
      </Grid>

      <Button
        primary
        content="Delete Camera"
        onClick={(): void => {
          dispatch(deleteCamera(id));
        }}
      />
    </Flex>
  );
};

export default CameraDetailInfo;
