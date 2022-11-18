import SoonSpace from 'soonspacejs';
import { TopologyInfo } from 'soonspacejs/types/Library';
import { ITreeData, ITopologyPath, ILoadSceneOptions, TPropertiesMap, TAnimationsMap, IPlayAnimationByIdOptions } from './types';
declare class Soonmanager2SyncPlugin {
    readonly ssp: SoonSpace;
    path: string;
    /**
     * 模型树
     */
    treeData: ITreeData[] | null;
    /**
     * 拓扑路径
     */
    topologyData: TopologyInfo[] | null;
    /**
     * 自定义属性
     */
    propertiesData: TPropertiesMap | null;
    /**
     * 动画
     */
    animationsData: TAnimationsMap | null;
    constructor(ssp: SoonSpace);
    private resolvePath;
    private fetchData;
    /**
     * 获取场景树
     */
    fetchTreeData(): Promise<ITreeData[]>;
    /**
     * 获取拓扑路径
     * @returns
     */
    fetchTopologyData(): Promise<ITopologyPath[]>;
    /**
     * 获取自定义属性
     * @returns
     */
    fetchPropertiesData(): Promise<TPropertiesMap>;
    /**
     * 获取动画
     * @returns
     */
    fetchAnimationsData(): Promise<TAnimationsMap>;
    /**
     * 加载场景树中的对象
     */
    private loadObjects;
    /**
     * 设置 path
     * @param path
     */
    setPath(path: string): void;
    /**
     * 同步场景树
     */
    loadScene(options?: ILoadSceneOptions): Promise<void>;
    /**
     * 获取拓扑路径列表
     */
    getTopologies(): Promise<TopologyInfo[]>;
    /**
     * 播放动画
     */
    playAnimationById(id: string, animationIndex?: number, options?: IPlayAnimationByIdOptions): Promise<void>;
}
export * from './types';
export * from './constant';
export default Soonmanager2SyncPlugin;
